const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar-sticky", window.scrollY > 0)
})