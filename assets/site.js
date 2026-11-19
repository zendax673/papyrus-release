/* Shared behaviour for every page: the light/dark toggle, and the
   click-to-enlarge lightbox over any figure plate. Page-specific logic
   lives in its own file (index.js). The pre-paint theme bootstrap is the
   small inline script in each page's <head>. */
(function () {
  var root = document.documentElement;
  var KEY = 'pp-theme';
  var meta = document.querySelector('meta[name="color-scheme"]');
  var systemDark = matchMedia('(prefers-color-scheme: dark)');

  // ---- Theme: follow the system unless the user overrides it ----
  function stored() {
    try { var t = localStorage.getItem(KEY); return t === 'light' || t === 'dark' ? t : null; }
    catch (e) { return null; }
  }
  var override = stored();

  // <picture> sources pick the dark capture with a media query; when the
  // user overrides the system scheme, point that query at the override.
  function syncPictures() {
    var media = override === 'dark' ? 'all'
      : override === 'light' ? 'not all'
      : '(prefers-color-scheme: dark)';
    document.querySelectorAll('source[data-scheme="dark"]').forEach(function (s) {
      if (s.media !== media) s.media = media;
    });
  }

  function apply() {
    if (override) root.setAttribute('data-theme', override);
    else root.removeAttribute('data-theme');
    if (meta) meta.content = override || 'light dark';
    syncPictures();
  }

  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var shown = override || (systemDark.matches ? 'dark' : 'light');
      var target = shown === 'dark' ? 'light' : 'dark';
      var system = systemDark.matches ? 'dark' : 'light';
      // Toggling back to what the system shows means "follow the system
      // again": forget the override rather than pinning it.
      override = target === system ? null : target;
      try {
        if (override) localStorage.setItem(KEY, override); else localStorage.removeItem(KEY);
      } catch (e) {}
      apply();
    });
  }
  // Another tab changed the override.
  addEventListener('storage', function (e) {
    if (e.key === KEY) { override = stored(); apply(); }
  });
  // Without an override the CSS follows the system on its own; the pictures
  // need nothing either. Keep the meta in step if the system flips.
  systemDark.addEventListener('change', apply);
  if (override) syncPictures();

  // ---- Lightbox: a native modal <dialog> ----
  var lb = document.getElementById('lightbox');
  if (!lb || typeof lb.showModal !== 'function') return;
  var lbImg = lb.querySelector('img');

  // closedby="any" gives click-outside-to-close where supported (not Safari
  // yet); test the pointer position, so clicks on the image never close it.
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    var outside = function (e) {
      var r = lbImg.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    var pressedOutside = false;
    lb.addEventListener('pointerdown', function (e) { pressedOutside = outside(e); });
    lb.addEventListener('pointerup', function (e) {
      if (pressedOutside && outside(e) && !e.target.closest('button')) lb.close();
    });
  }

  var zoomIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/>' +
    '<path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>';

  document.querySelectorAll('.shot').forEach(function (host) {
    var img = host.querySelector('img.screenshot');
    if (!img) return;
    var figure = host.closest('figure');
    var label = figure && figure.querySelector('figcaption b');
    var shots = figure ? figure.querySelectorAll('.shot') : [host];
    var name = label ? label.textContent.replace(/\.\s*$/, '') : 'screenshot';
    if (shots.length > 1) name += ' (' + (Array.prototype.indexOf.call(shots, host) + 1) + ' of ' + shots.length + ')';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'zoom';
    btn.setAttribute('aria-label', 'Enlarge ' + name);
    btn.innerHTML = zoomIcon;
    host.appendChild(btn);
    btn.addEventListener('click', function () {
      // Open the full-resolution file of whichever capture is showing.
      lbImg.src = (img.currentSrc || img.src).replace(/-\d{3,4}\.(avif|jpg)$/, '.$1');
      lbImg.alt = img.alt;
      lb.showModal();
    });
  });
})();

/* Copy buttons for command blocks: <pre class="spec" data-copy>. */
(function () {
  var copyIcon = '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="5.5" width="8" height="8" rx="1.6"/><path d="M10.5 5.5V4.1a1.6 1.6 0 0 0-1.6-1.6H4.1a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.4"/></svg>';
  var doneIcon = '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.2 8.4l3 3 6.6-6.8"/></svg>';
  var blocks = document.querySelectorAll('pre.spec[data-copy]');
  Array.prototype.forEach.call(blocks, function (pre) {
    var wrap = document.createElement('div');
    wrap.className = 'copyblock';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copyblock__btn';
    btn.innerHTML = copyIcon;
    btn.title = 'Copy';
    btn.setAttribute('aria-label', 'Copy command');
    var status = document.createElement('span');
    status.className = 'visually-hidden';
    status.setAttribute('role', 'status');
    wrap.appendChild(btn);
    wrap.appendChild(status);
    var timer;
    function say(icon, tip, announce, done) {
      btn.innerHTML = icon;
      btn.title = tip;
      btn.classList.toggle('is-done', !!done);
      status.textContent = announce;
      clearTimeout(timer);
      timer = setTimeout(function () {
        btn.innerHTML = copyIcon; btn.title = 'Copy'; btn.classList.remove('is-done'); status.textContent = '';
      }, 2400);
    }
    function select() {
      var range = document.createRange();
      range.selectNodeContents(pre);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      say(copyIcon, 'Selected. Press ⌘C to copy', 'Selected. Press Command C to copy.', false);
    }
    btn.addEventListener('click', function () {
      var text = pre.innerText.replace(/\n$/, '');
      if (!navigator.clipboard) { select(); return; }
      navigator.clipboard.writeText(text).then(function () { say(doneIcon, 'Copied', 'Copied', true); }, select);
    });
  });
})();
