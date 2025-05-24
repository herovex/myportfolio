const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  },
);

prevButton.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  },
);

const items = document.querySelectorAll('.item');
const overlay = document.querySelector('.fullscreen-overlay');
const fullscreenImage = document.querySelector('.fullscreen-image');

items.forEach(item => {
    item.addEventListener('click', () => {
        const bgImage = item.style.backgroundImage.slice(4, -1).replace(/"/g, "");
        fullscreenImage.src = bgImage;
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});
