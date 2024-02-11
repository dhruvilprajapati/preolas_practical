const navList = document.querySelector("nav");
const navToggler = document.querySelector(".mobile-nav-toggler");

navToggler.addEventListener("click", () => {
    const visibility = navList.getAttribute("data-visible");
    if (visibility === "false") {
        navList.setAttribute("data-visible", "true");
        navToggler.setAttribute("area-expanded", "true");
    } else if (visibility === "true") {
        navList.setAttribute("data-visible", "false");
        navToggler.setAttribute("area-expanded", "false");
    }
});
/*------------------------------- Slider--------------------------------*/

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const header = document.querySelector("header");

document.addEventListener("scroll", () => {
    if (window.scrollY >= 600) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 3.5,
    centeredSlides: true,
    initialSlide: 2,
    spaceBetween: 30,
});

const caseStudiesSwiper = new Swiper(".case-studies-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    centeredSlides: true,
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function scrollToNext() {
    window.scrollTo({
        top: 570,
        behavior: 'smooth'
    });
}