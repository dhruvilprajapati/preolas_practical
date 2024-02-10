const next = document.getElementById("case-studies-next");
const prev = document.getElementById("case-studies-prev");

next.addEventListener("click", () => {
    caseStudiesSwiper.slideNext(500, false);
});

prev.addEventListener("click", () => {
    caseStudiesSwiper.slidePrev(500, false);
});