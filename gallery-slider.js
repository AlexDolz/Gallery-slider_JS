let setPx = 0;

const sliderRow = document.querySelector('#slider_line');

const nextBtn = document.querySelector('#slider_next');
const prevBtn = document.querySelector('#slider_prev');

nextBtn.addEventListener('click', () => {
  setPx += 356;
  if (setPx > 2136) {
    setPx = 0;
  }
  sliderRow.style.right = setPx + 'px';
});

prevBtn.addEventListener('click', () => {
  setPx -= 356;
  if (setPx < 0) {
    setPx = 2136;
  }
  sliderRow.style.right = setPx + 'px';
});
