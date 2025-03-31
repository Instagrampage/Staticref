<?php
// CORS izinleri
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Telegram Bot Bilgileri
$token = "7676691540:AAH_BiHHfI0hK1EQC87oGw6GjCyI5C6ySKE"; // Bot token
$chat_id = "-1002584942967"; // Chat ID

// Test mesajı
$text = "🧪 *Test Mesajı* 🧪\n\nBu bir test mesajıdır. Eğer bu mesajı görüyorsanız, uygulama düzgün çalışıyor demektir.\n\n🕝 *Gönderim Zamanı:* " . date('Y-m-d H:i:s');

// Mesajı Telegram'a gönder
$telegramApiUrl = "https://api.telegram.org/bot$token/sendMessage";

// POST verileri
$postData = [
    'chat_id' => $chat_id,
    'text' => $text,
    'parse_mode' => 'Markdown'
];

// cURL isteği oluştur
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $telegramApiUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// İsteği gönder ve yanıtı al
$response = curl_exec($ch);
$error = curl_error($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

// Yanıtı hazırla
$result = [
    'timestamp' => date('Y-m-d H:i:s'),
    'sent_to' => [
        'bot_token' => substr($token, 0, 5) . '...' . substr($token, -5),
        'chat_id' => $chat_id
    ]
];

// Yanıtı kontrol et
if ($error) {
    $result['success'] = false;
    $result['error'] = 'cURL hatası: ' . $error;
} else {
    $responseData = json_decode($response, true);
    
    if ($httpCode == 200 && isset($responseData['ok']) && $responseData['ok'] === true) {
        $result['success'] = true;
        $result['message'] = 'Test mesajı başarıyla gönderildi';
        $result['telegram_response'] = $responseData;
    } else {
        $result['success'] = false;
        $result['error'] = 'Telegram API hatası';
        $result['telegram_response'] = $responseData;
        $result['http_code'] = $httpCode;
    }
}

// JSON olarak yanıtı gönder
echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>