document.addEventListener('DOMContentLoaded', function () {
  const links = [
    document.querySelector('#hero-link'),
    document.querySelector('#description-link'),
    document.querySelector('#pieces-link'),
    document.querySelector('#caracteristiques-link'),
  ];

  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});
