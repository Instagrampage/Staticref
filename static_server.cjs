const http = require('http');
const fs = require('fs');
const path = require('path');

const staticFolder = './static_version';
const port = 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.php': 'application/x-httpd-php'
};

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // PHP dosyaları için özel işlem
  if (req.url === '/proxy.php' && req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    // Test için proxy simülasyonu
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('POST data:', data);
        
        // Başarılı yanıt simülasyonu
        res.end(JSON.stringify({ success: true, message: 'Test başarılı - mesaj gönderildi!' }));
      } catch (e) {
        res.end(JSON.stringify({ success: false, error: 'JSON hatalı: ' + e.message }));
      }
    });
    
    return;
  }
  
  // Kök dizin için index.html'e yönlendir
  let filePath = req.url === '/' 
    ? path.join(staticFolder, 'index.html') 
    : path.join(staticFolder, req.url);
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log(`Dosya bulunamadı: ${filePath}`);
        res.writeHead(404);
        res.end('404 - Dosya bulunamadı');
      } else {
        console.error(`Sunucu hatası: ${err.code}`);
        res.writeHead(500);
        res.end(`Sunucu hatası: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});