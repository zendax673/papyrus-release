/* Home-page behaviour: running-head section + TOC scroll-spy, the margin
   citation ledger, the citation-style stamps, and Copy .bib. */
(function () {
  // ---- Scroll-spy: running head, current TOC entry, ledger "cited" state ----
  var secs = Array.from(document.querySelectorAll('.sec'));
  var names = {
    's-intro': '1 · One Library', 's-library': '2 · Capture & Organize',
    's-reading': '3 · Read & Annotate', 's-notebooks': '4 · Notebooks',
    's-evidence': '5 · Projects & Evidence', 's-connect': '6 · Similar Papers & Apple Intelligence',
    's-method': '7 · Search, Sync & Privacy', 's-export': '8 · Export & Citation'
  };
  var runSec = document.getElementById('runSec');
  var tocLinks = Array.from(document.querySelectorAll('.toc a'));

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var id = e.target.id;
      runSec.textContent = names[id] || 'Abstract';
      tocLinks.forEach(function (a) {
        var current = a.getAttribute('href') === '#' + id;
        a.classList.toggle('is-current', current);
        if (current) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach(function (s) { spy.observe(s); });

  // The ledger fills in as each cited section enters.
  var keyBySec = { 's-evidence': ['peng2026whaleNecropolis', 'smith2021abyssalWhaleFalls',
                                  'goffredi2018osedaxBivalves', 'reynolds2020strontiumDating'] };
  var cite = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      (keyBySec[e.target.id] || []).forEach(function (k) {
        var el = document.querySelector('.ledger-margin__item[data-key="' + k + '"]');
        if (el) el.classList.add('is-cited');
      });
    });
  }, { rootMargin: '0px 0px -30% 0px' });
  secs.forEach(function (s) { cite.observe(s); });

  // ---- Citation style stamps (a single-select group of toggle buttons) ----
  var CITES = {
    apa: 'Peng, X., Zhou, P., Song, X., Bianucci, G., Du, M., Collareta, A., Gao, Z., &amp; Xie, T. (2026). A 5.3-million-year-old deep-sea whale necropolis in the Diamantina Zone. <i>Nature.</i>',
    mla: 'Peng, Xiaotong, et al. “A 5.3-Million-Year-Old Deep-Sea Whale Necropolis in the Diamantina Zone.” <i>Nature,</i> 2026.',
    chicago: 'Peng, Xiaotong, et al. “A 5.3-Million-Year-Old Deep-Sea Whale Necropolis in the Diamantina Zone.” <i>Nature</i> (2026).',
    ieee: 'X. Peng et al., “A 5.3-million-year-old deep-sea whale necropolis in the Diamantina Zone,” <i>Nature,</i> 2026.',
    harvard: 'Peng, X. et al. (2026) ‘A 5.3-million-year-old deep-sea whale necropolis in the Diamantina Zone’, <i>Nature.</i>',
    vancouver: 'Peng X, Zhou P, Song X, Bianucci G, Du M, Collareta A, et al. A 5.3-million-year-old deep-sea whale necropolis in the Diamantina Zone. Nature. 2026.'
  };
  var line = document.getElementById('citeLine');
  var stamps = Array.from(document.querySelectorAll('.stamps button'));
  stamps.forEach(function (b) {
    b.addEventListener('click', function () {
      stamps.forEach(function (x) {
        x.classList.toggle('is-active', x === b);
        x.setAttribute('aria-pressed', String(x === b));
      });
      line.innerHTML = CITES[b.dataset.style]; // fixed strings above, never user input
    });
  });

  // ---- Copy .bib, with an announced result and a fallback ----
  var copyBtn = document.getElementById('copyBib');
  var status = document.getElementById('copyStatus');
  var bib = document.getElementById('bibblock');
  var clearTimer;
  function say(msg) {
    status.textContent = msg;
    clearTimeout(clearTimer);
    clearTimer = setTimeout(function () { status.textContent = ''; }, 2500);
  }
  function selectBib() {
    var range = document.createRange();
    range.selectNodeContents(bib);
    var sel = getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    bib.scrollIntoView({ block: 'nearest' });
    say('Selected — press ⌘C to copy');
  }
  if (copyBtn && bib && status) copyBtn.addEventListener('click', function () {
    if (!navigator.clipboard) { selectBib(); return; }
    navigator.clipboard.writeText(bib.innerText).then(function () { say('Copied ✓'); }, selectBib);
  });
})();
