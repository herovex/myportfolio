/* Old Slider Logic - Commented Out
const nextButtonOld = document.querySelector('.next'); // Renamed to avoid conflict
const prevButtonOld = document.querySelector('.prev'); // Renamed to avoid conflict

if (nextButtonOld && prevButtonOld) {
    nextButtonOld.addEventListener(
      'click',
      () => {
        const items = document.querySelectorAll('.item');
        // Ensure .slide exists or use .project-slider if class name changed
        const slideContainer = document.querySelector('.slide') || document.querySelector('.project-slider'); 
        if (slideContainer) slideContainer.appendChild(items[0]);
      },
    );

    prevButtonOld.addEventListener(
      'click',
      () => {
        const items = document.querySelectorAll('.item');
        // Ensure .slide exists or use .project-slider
        const slideContainer = document.querySelector('.slide') || document.querySelector('.project-slider');
        if (slideContainer) slideContainer.prepend(items[items.length - 1]);
      },
    );
}
*/

/* Old Fullscreen Image Logic - Commented Out
const itemsOld = document.querySelectorAll('.item'); // Renamed to avoid conflict
const overlayOld = document.querySelector('.fullscreen-overlay'); // Renamed
const fullscreenImageOld = document.querySelector('.fullscreen-image'); // Renamed

if (overlayOld && fullscreenImageOld && itemsOld.length > 0) {
    itemsOld.forEach(item => {
        item.addEventListener('click', () => {
            // This click listener is problematic for new slider as items are full screen
            // const bgImage = item.style.backgroundImage.slice(4, -1).replace(/"/g, "");
            // fullscreenImageOld.src = bgImage;
            // overlayOld.style.display = 'block';
            // document.body.style.overflow = 'hidden';
        });
    });

    overlayOld.addEventListener('click', () => {
        overlayOld.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}
*/

// New Immersive Project Showcase Slider Logic
const projectSlider = document.querySelector('.project-slider');
const slides = document.querySelectorAll('.project-slider .item');
const nextBtn = document.querySelector('.buttons .next'); 
const prevBtn = document.querySelector('.buttons .prev'); 
const paginationContainer = document.querySelector('.slider-pagination');
let currentSlide = 0;
let dots = []; // To store dot elements

function updatePagination() {
    if (paginationContainer && dots.length > 0) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
}

function showSlide(index, direction) { 
    const oldSlideIndex = currentSlide;
    const oldSlide = slides[oldSlideIndex];

    if (oldSlide) { // Check if oldSlide exists (e.g. on initial load it might not be relevant this way)
      oldSlide.classList.remove('active');
      if (direction === 'next') {
          oldSlide.classList.add('prev-slide'); 
      } else if (direction === 'prev') {
          oldSlide.classList.remove('prev-slide');
      }
    }

    currentSlide = index;
    const newActiveSlide = slides[currentSlide];

    if (direction === 'prev') {
        newActiveSlide.classList.remove('prev-slide'); 
        newActiveSlide.style.transform = 'translateX(-100%)';
        void newActiveSlide.offsetWidth; 
    } else if (direction === 'next' && oldSlideIndex !== currentSlide ) { // Only apply if not the same slide
         newActiveSlide.style.transform = 'translateX(100%)'; 
         void newActiveSlide.offsetWidth; 
         newActiveSlide.classList.remove('prev-slide');
    } else if (oldSlideIndex === currentSlide && !newActiveSlide.classList.contains('active')){
        // This handles the initial load or jump via dot
        newActiveSlide.style.transform = 'translateX(0%)'; // Ensure it's not coming from side
        void newActiveSlide.offsetWidth;
        newActiveSlide.classList.remove('prev-slide');
    }
    
    newActiveSlide.classList.add('active');
    updatePagination();

    slides.forEach((s, i) => {
        if (i !== currentSlide && i !== oldSlideIndex) {
            s.classList.remove('prev-slide');
            s.style.transform = ''; 
        }
    });

    if (oldSlide && oldSlide !== newActiveSlide) {
         setTimeout(() => {
            oldSlide.classList.remove('prev-slide');
            oldSlide.style.transform = ''; 
        }, 700); 
    }
}

if (projectSlider && slides.length > 0) { // Simplified main check
    // Generate Pagination Dots
    if (paginationContainer) {
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                // Determine direction for animation if desired for dot clicks
                // For now, just jump, or determine direction based on currentSlide vs i
                let direction;
                if (i > currentSlide) direction = 'next';
                else if (i < currentSlide) direction = 'prev';
                // else no direction if same slide clicked, though showSlide will still run
                showSlide(i, direction); 
            });
            paginationContainer.appendChild(dot);
            dots.push(dot); // Store dot for easy access
        });
    }

    // Initialize first slide
    slides[currentSlide].style.transform = 'translateX(0)'; 
    slides[currentSlide].classList.add('active'); 
    updatePagination(); // Update dots for initial active slide

    if (nextBtn && prevBtn) { // Check for buttons before adding listeners
        nextBtn.addEventListener('click', () => {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex, 'next');
        });

        prevBtn.addEventListener('click', () => {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex, 'prev');
        });
    }
}
