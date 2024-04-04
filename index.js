console.log('bobbyhadz.com');

window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;

  if (verticalScrollPx < 500) {
    document.body.style.backgroundColor = 'red';
  } else if (verticalScrollPx > 500 && verticalScrollPx < 1000) {
    document.body.style.backgroundColor = 'green';
  } else {
    document.body.style.backgroundColor = 'lightblue';
  }
});
