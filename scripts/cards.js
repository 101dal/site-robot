const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const offLeft = card.offsetLeft;
  const offTop = card.offsetTop;
  card.addEventListener('mousemove', e => {
    const x = e.pageX - offLeft - card.clientWidth / 2;
    const y = e.pageY - offTop - card.clientHeight / 2;
    card.style.setProperty('--mouse-x', x + 'px');
    card.style.setProperty('--mouse-y', y + 'px');
  });
});
