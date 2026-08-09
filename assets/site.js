/* Shared behaviour for every page: the light/dark toggle, and the
   click-to-enlarge lightbox over any figure plate. Page-specific logic
   (the running-head observer, the citation stamps) stays inline. */
(function () {
  var root = document.documentElement;

  // ---- Theme toggle ----
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    var effective = function () {
      return root.getAttribute('data-theme') ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    };
    toggle.addEventListener('click', function () {
      var next = effective() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('pp-theme', next); } catch (e) {}
    });
  }

  // ---- Lightbox ----
  var lb = document.querySelector('.lightbox');
  if (!lb) return;
  var lbImg = lb.querySelector('img');
  var lbClose = lb.querySelector('.lightbox__close');
  var lastTrigger = null;

  function open(src, alt, trigger) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lastTrigger = trigger;
  }
  function close() {
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  }
  if (lbClose) lbClose.addEventListener('click', close);
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  var zoomIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/>' +
    '<path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>';

  document.querySelectorAll('.shot').forEach(function (host) {
    if (!host.querySelector('.screenshot')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'zoom';
    btn.setAttribute('aria-label', 'Enlarge');
    btn.innerHTML = zoomIcon;
    host.appendChild(btn);
    btn.addEventListener('click', function () {
      // Whichever of the light/dark pair is currently displayed.
      var shown = Array.prototype.find.call(
        host.querySelectorAll('.screenshot'),
        function (img) { return img.offsetParent !== null; }
      ) || host.querySelector('.screenshot');
      if (shown) open(shown.currentSrc || shown.src, shown.alt, btn);
    });
  });
})();
