const testimonialNext = document.getElementById("testimonial-next");
const testimonialPrev = document.getElementById("testimonial-prev");

testimonialNext.addEventListener("click", () => {
    swiper.slideNext(500, false);
});

testimonialPrev.addEventListener("click", () => {
    swiper.slidePrev(500, false);
});