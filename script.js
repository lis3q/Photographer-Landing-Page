// Sticky navbar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar-sticky", window.scrollY > 0)
})

// Link active when scrolling
const sections = document.querySelectorAll("section");
const navlink = document.querySelectorAll(".nav-link");
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlink.forEach(link => {
                link.classList.remove("active");
                document.querySelector('.navbar-nav a[href*=' + id + ']').classList.add("active");
            })
        }
    })
}