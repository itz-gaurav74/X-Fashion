
document / addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    const MobileView = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    hamburger.addEventListener('click', MobileView);



    const navLinks = document.querySelectorAll(".nav-link");

    const closeMenu = () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    };

    navLinks.forEach(navLink => navLink.addEventListener("click", closeMenu));

})