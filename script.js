document.querySelector('.overlay').addEventListener('click', function() {
    this.classList.add('hide');
});

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
