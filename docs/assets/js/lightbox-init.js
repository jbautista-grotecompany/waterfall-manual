document$.subscribe(function() {
  // ----------------------------------------------------------
  // Medium-zoom for figure images
  // ----------------------------------------------------------
  if (window.innerWidth > 768) {
    mediumZoom('.md-typeset img', {
      background: 'rgba(100, 100, 100, 0.7)',
      margin: 150,
    });
  }

  // ----------------------------------------------------------
  // Page toolbar — Previous, Next, Print
  // Inserts a strip at the top of .md-content__inner.
  // Prev/Next URLs are read from the primary sidebar.
  // ----------------------------------------------------------
  (function() {
    var headerInner = document.querySelector('.md-header__inner');
    if (!headerInner) return;

    var primaryList = document.querySelector(
      '.md-sidebar--primary .md-nav--primary > ul.md-nav__list'
    );

    var prev = null, next = null;
    if (primaryList) {
      var pages = [];
      var activeIdx = -1;
      var li = primaryList.firstElementChild;
      while (li) {
        if (li.classList.contains('md-nav__item')) {
          var a = null;
          for (var k = 0; k < li.children.length; k++) {
            var c = li.children[k];
            if (c.tagName === 'A' && c.classList.contains('md-nav__link')) {
              a = c;
              break;
            }
          }
          if (a) {
            pages.push({ href: a.href, title: (a.textContent || '').trim() });
            if (li.classList.contains('md-nav__item--active')) {
              activeIdx = pages.length - 1;
            }
          }
        }
        li = li.nextElementSibling;
      }
      if (activeIdx > 0) prev = pages[activeIdx - 1];
      if (activeIdx >= 0 && activeIdx < pages.length - 1) next = pages[activeIdx + 1];
    }

    var SVG_PREV  = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>';
    var SVG_NEXT  = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';
    var SVG_PRINT = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>';

    function makeBtn(svg, label, target, onclick) {
      var disabled = !target && !onclick;
      var el;
      if (target) {
        el = document.createElement('a');
        el.href = target.href;
      } else {
        el = document.createElement('button');
        el.type = 'button';
        if (onclick) el.onclick = onclick;
      }
      el.className = 'grote-toolbar__btn' + (disabled ? ' grote-toolbar__btn--disabled' : '');
      el.title = label;
      el.setAttribute('aria-label', label);
      el.innerHTML = svg;
      return el;
    }

    var bar = document.createElement('div');
    bar.className = 'grote-toolbar';
    bar.appendChild(makeBtn(SVG_PREV,  prev ? 'Previous: ' + prev.title : 'Previous (none)', prev,  null));
    bar.appendChild(makeBtn(SVG_NEXT,  next ? 'Next: '     + next.title : 'Next (none)',     next,  null));
    bar.appendChild(makeBtn(SVG_PRINT, 'Print this section', null, function() { window.print(); }));

    var searchEl = headerInner.querySelector('.md-search');
    if (searchEl) {
      headerInner.insertBefore(bar, searchEl);
    } else {
      headerInner.appendChild(bar);
    }
  })();

  // ----------------------------------------------------------
  // TOC scrollspy override
  // Highlights the in-page heading link in the left sidebar
  // based on which heading has crossed 25% from the top of the
  // viewport. Runs each animation frame to override Material's
  // built-in scrollspy, which lags one heading behind.
  // ----------------------------------------------------------
  var navLinks = document.querySelectorAll('.md-nav__link[href^="#"]');
  if (!navLinks.length) return;

  var items = [];
  navLinks.forEach(function(link) {
    var id = decodeURIComponent(link.getAttribute('href').slice(1));
    var heading = document.getElementById(id);
    if (heading) items.push({ link: link, heading: heading });
  });
  if (!items.length) return;

  var lastIdx = -2;
  function tick() {
    var trigger = window.innerHeight * 0.25;
    var idx = -1;
    for (var i = 0; i < items.length; i++) {
      if (items[i].heading.getBoundingClientRect().top <= trigger) {
        idx = i;
      } else {
        break;
      }
    }
    if (idx === -1) idx = 0;

    if (idx !== lastIdx) {
      items.forEach(function(it, i) {
        if (i === idx) {
          it.link.classList.add('md-nav__link--active');
        } else {
          it.link.classList.remove('md-nav__link--active');
        }
      });
      lastIdx = idx;
    }
    requestAnimationFrame(tick);
  }
  tick();
});