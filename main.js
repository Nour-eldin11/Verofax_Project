document.querySelectorAll('nav ul li').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        let dropdown = this.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    });
    item.addEventListener('mouseleave', function () {
        let dropdown = this.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    });
});

