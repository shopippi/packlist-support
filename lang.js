// 日本語と英語の切り替え。?lang= があればそれ、なければ端末の言語。
(function () {
  var q = new URLSearchParams(location.search).get('lang');
  var lang = q || ((navigator.language || 'en').toLowerCase().startsWith('ja') ? 'ja' : 'en');
  if (lang !== 'ja') lang = 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[lang]').forEach(function (el) {
    if (el === document.documentElement) return;
    el.classList.toggle('show', el.getAttribute('lang') === lang);
  });
  document.querySelectorAll('nav.lang a').forEach(function (a) {
    a.classList.toggle('on', a.dataset.lang === lang);
  });
})();
