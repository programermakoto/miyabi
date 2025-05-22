// 言語変更機能
{
  const toggleBtn = document.getElementById('lang-toggle');
  const langOptions = document.querySelector('.lang-options');

  if (toggleBtn && langOptions) {
    toggleBtn.addEventListener('click', () => {
      langOptions.classList.toggle('active');
    });

    // ドキュメント全体のクリックイベントを監視
    document.addEventListener('click', (e) => {
      if (!langOptions.contains(e.target) && !toggleBtn.contains(e.target)) {
        langOptions.classList.remove('active');
      }
    });
  }
}


// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

if (hamburger && nav) {
    // ハンバーガーメニューのクリックイベント
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // メニューリンクのクリックイベント
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // 画面外クリックでメニューを閉じる
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

// スクロールアニメーション
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top + scrollPosition;
    if (scrollPosition > elementPosition - window.innerHeight) {
      element.classList.add('active');
    }
  });
});