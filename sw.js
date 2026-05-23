self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // アプリ認識のための最小構成（キャッシュ処理はブラウザの標準機能に任せます）
});