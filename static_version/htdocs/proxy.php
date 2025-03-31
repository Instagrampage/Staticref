<?php
// Bu dosya InfinityFree sunucusunda /htdocs dizini içinde olacak şekilde düzenlenmiştir

// CORS izinleri
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// OPTIONS isteği (preflight) ise hemen yanıt ver
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Sadece POST isteklerini işle
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Sadece POST istekleri kabul edilir']);
    exit();
}

// JSON verilerini al
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Gerekli verilerin varlığını kontrol et
if (!$data || !isset($data['token']) || !isset($data['chat_id']) || !isset($data['text'])) {
    echo json_encode(['success' => false, 'error' => 'Gerekli parametreler eksik']);
    exit();
}

// Verileri al
$token = $data['token'];
$chat_id = $data['chat_id'];
$text = $data['text'];

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

// Yanıtı kontrol et
if ($error) {
    echo json_encode(['success' => false, 'error' => 'cURL hatası: ' . $error]);
} else {
    $responseData = json_decode($response, true);
    
    if ($httpCode == 200 && isset($responseData['ok']) && $responseData['ok'] === true) {
        echo json_encode(['success' => true, 'message' => 'Mesaj başarıyla gönderildi']);
    } else {
        echo json_encode([
            'success' => false, 
            'error' => 'Telegram API hatası', 
            'response' => $responseData,
            'http_code' => $httpCode
        ]);
    }
}
?>