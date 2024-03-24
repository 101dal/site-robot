const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const x = e.pageX - card.offsetLeft - card.clientWidth / 2;
    const y = e.pageY - card.offsetTop - card.clientHeight / 2;
    card.style.setProperty('--mouse-x', x + 'px');
    card.style.setProperty('--mouse-y', y + 'px');
  });
});
