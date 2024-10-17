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
