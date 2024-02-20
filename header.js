document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.querySelector('.main-menu-mobile');
    const navLinks = document.querySelector('.right-section');

    // Toggle the 'show' class when the menu button is clicked
    mobileMenuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    // Close the dropdown when clicking anywhere on the screen
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnMenuIcon = mobileMenuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuIcon) {
            navLinks.classList.remove('show');
        }
    });
});
