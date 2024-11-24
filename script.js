function toggleMenu() {
    const navLinks = document.querySelector(".links");
    navLinks.classList.toggle("show")

    const barMenu = document.querySelector(".bar-menu");
    barMenu.classList.toggle("open");
}