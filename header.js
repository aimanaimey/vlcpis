document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.querySelector('.main-menu-mobile');
    const navLinks = document.querySelector('.right-section');

    mobileMenuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
