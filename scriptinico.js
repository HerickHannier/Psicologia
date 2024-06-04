function toggleMenu() {
    const navbar = document.getElementById('navbarMenu');
    const currentWidth = navbar.style.width;

    if (currentWidth === '0px' || currentWidth === '') {
        navbar.style.width = '250px';
    } else {
        navbar.style.width = '0';
    }
}
