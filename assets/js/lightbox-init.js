document$.subscribe(function() {
  if (window.innerWidth > 768) {
    mediumZoom('.md-typeset img', {
      background: 'rgba(100, 100, 100, 0.7)',
      margin: 150,
    });
  }
});