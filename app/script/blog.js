(function () {
  document.querySelectorAll('.openConsultantModal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var m = document.getElementById('consultantModal');
      if (!m) return;
      m.classList.remove('hidden');
      m.classList.add('flex');
    });
  });

  var modal = document.getElementById('consultantModal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeConsultantModal();
    });
  }

  window.closeConsultantModal = function () {
    var m = document.getElementById('consultantModal');
    if (!m) return;
    m.classList.add('hidden');
    m.classList.remove('flex');
  };

  var menuBtn = document.getElementById('menuBtn');
  var closeBtn = document.getElementById('closeBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.onclick = function () { mobileMenu.classList.remove('-translate-x-full'); };
  }
  if (closeBtn && mobileMenu) {
    closeBtn.onclick = function () { mobileMenu.classList.add('-translate-x-full'); };
  }

  var meb = document.getElementById('mobileExploreBtn');
  var mem = document.getElementById('mobileExploreMenu');
  var mei = document.getElementById('mobileExploreIcon');
  if (meb && mem && mei) {
    meb.onclick = function () {
      mem.classList.toggle('hidden');
      mei.classList.toggle('bx-chevron-up');
      mei.classList.toggle('bx-chevron-down');
    };
  }

  var prog = document.getElementById('readProgress');
  if (prog) {
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY;
      var total = document.body.scrollHeight - window.innerHeight;
      prog.style.width = (total > 0 ? (scrolled / total * 100) : 0) + '%';
    }, { passive: true });
  }

  var article = document.getElementById('articleContent');
  var toc = document.getElementById('toc');
  if (!article || !toc) return;

  var headings = article.querySelectorAll('h2');
  if (headings.length === 0) {
    var tocWrap = toc.closest('.bg-white');
    if (tocWrap) tocWrap.style.display = 'none';
    return;
  }

  headings.forEach(function (h, i) {
    if (!h.id) h.id = 'section-' + i;
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = 'toc-link';
    a.textContent = h.textContent;
    toc.appendChild(a);
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var id = entry.target.id;
      var link = toc.querySelector('[href="#' + id + '"]');
      if (link) link.classList.toggle('active', entry.isIntersecting);
    });
  }, { rootMargin: '-72px 0px -70% 0px' });

  headings.forEach(function (h) { observer.observe(h); });
})();
