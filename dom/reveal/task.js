const reveal = document.querySelectorAll('.reveal');

reveal.forEach((item) => {
    document.addEventListener('scroll', () => {
        const position = item.getBoundingClientRect();
        if(position.bottom > 0 && position.top < window.innerHeight) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');           
        }
    });

});