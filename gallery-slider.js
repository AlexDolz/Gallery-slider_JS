let setPx = 0;

const sliderLine = document.querySelector('#slider_line');

const nextBtn = document.querySelector('#slider_next');
const prevBtn = document.querySelector('#slider_prev');

nextBtn.addEventListener('click', () => {
  setPx += 356;
  if (setPx > 2136) {
    setPx = 0;
  }
  sliderLine.style.right = setPx + 'px';
});

prevBtn.addEventListener('click', () => {
  setPx -= 356;
  if (setPx < 0) {
    setPx = 2136;
  }
  sliderLine.style.right = setPx + 'px';
});
