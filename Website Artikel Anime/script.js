const elements = document.querySelectorAll('.artikel, .card, .anime-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => observer.observe(el));

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header.navbar-container');
    if (window.scrollY > 50) { // Ganti 50 dengan nilai scroll yang diinginkan
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
