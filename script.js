document.querySelector('.overlay').addEventListener('click', function() {
    this.classList.add('hide');
});

/*
document.querySelectorAll('.slider .item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.slider .item').forEach(i => {
            i.classList.remove('bounce');
        });
        
        // this.classList.add('bounce');
        
        // setTimeout(() => {
        //     this.classList.remove('bounce');
        // }, 500);
    });
});
*/

const slider = document.querySelector('.slider');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider .item');
const nextBtn = document.querySelector('.slider .next-btn');
const prevBtn = document.querySelector('.slider .prev-btn');

if (track && items.length > 0 && nextBtn && prevBtn) { // Ensure all crucial elements exist
    let currentIndex = 0;
    const totalItems = items.length;

    // Set track width (optional, flexbox might handle it, but can be explicit)
    // track.style.width = `${totalItems * 100}%`;

    function updateSliderPosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0; // Loop to start
        }
        updateSliderPosition();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalItems - 1; // Loop to end
        }
        updateSliderPosition();
    });

    // Initialize
    updateSliderPosition();
}
