// -- Run Js Code After DOM Load
document / addEventListener('DOMContentLoaded', function () {

    // -- Hamburger Menu Open and Close
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    const MobileView = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    hamburger.addEventListener('click', MobileView);


    // -- Hamburger Menu Close When Click On NavLink
    const navLinks = document.querySelectorAll(".nav-link");

    const closeMenu = () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    };

    navLinks.forEach(navLink => navLink.addEventListener("click", closeMenu));

    // ----------  Hamburger Menu Js End  ----------

    const ScrollTop = document.querySelector('.scrollToTop');

    ScrollTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })



})