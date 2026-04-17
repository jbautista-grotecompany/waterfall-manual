document$.subscribe(function() {
  if (window.innerWidth > 768) {
    mediumZoom('.md-typeset img', {
      background: 'rgba(0, 0, 0, 0.8)',
      margin: 150,
    });
  }
});