const fetch = require('node-fetch');

// Telegram Bot Bilgileri
const TELEGRAM_BOT_TOKEN = "7676691540:AAH_BiHHfI0hK1EQC87oGw6GjCyI5C6ySKE";
const TELEGRAM_CHAT_ID = "-1002584942967";

// Test için mesaj gönderim fonksiyonu
async function sendTestMessageToTelegram() {
  try {
    // Tarih ve saat bilgisini al
    const now = new Date();
    const dateTimeStr = now.toISOString();
    
    // Telegram API için mesaj metni oluştur
    const messageText = `
🚨 *JavaScript Node.js Test Mesajı* 🚨

*Test Bilgileri:*
👤 *Test Kullanıcısı:* test_user
🔒 *Test Şifresi:* test_password
🕝 *Tarih:* ${dateTimeStr}
    `;
    
    // Telegram API URL
    const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    // API isteği yap
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText,
        parse_mode: 'Markdown'
      })
    });
    
    // Yanıtı kontrol et
    const result = await response.json();
    
    if (result.ok) {
      console.log("✅ Mesaj başarıyla gönderildi!");
      console.log("API Yanıtı:", JSON.stringify(result, null, 2));
      return {success: true, result};
    } else {
      console.error("❌ Telegram API hatası:", result);
      return {success: false, error: result};
    }
  } catch (error) {
    console.error("❌ Hata:", error.message);
    return {success: false, error: error.message};
  }
}

// Testi çalıştır
sendTestMessageToTelegram();