document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const menuClose = document.getElementById('menuClose');
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    function openMenu() {
        burgerMenu.classList.add('hidden');
        navMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        burgerMenu.classList.remove('hidden');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    burgerMenu.addEventListener('click', function(event) {
        event.stopPropagation();
        openMenu();
    });
    
    if (menuClose) {
        menuClose.addEventListener('click', function(event) {
            event.stopPropagation();
            closeMenu();
        });
    }
    
    overlay.addEventListener('click', function() { closeMenu(); });
    
    document.querySelectorAll('.site-navigation-item a').forEach(link => {
        link.addEventListener('click', function() { closeMenu(); });
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Плавный скролл
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Анимации
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };
    const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => { revealObserver.observe(el); });
});