"use strict";
const header = document.querySelector(".header");
const sectionAboutUs = document.querySelector(".about_us--container");
const sectionReviews = document.querySelector(".reviews--container");
const firstReview = document.querySelector(".first--review");
const headerStickySections = document.querySelectorAll(".sticky--nav");
const allSections = document.querySelectorAll(".section");
const btnReviews = document.querySelector(".button--reviews");
btnReviews.addEventListener("click", function() {
    sectionReviews.classList.toggle("reviews--expand");
    btnReviews.classList.toggle("button--reviews-expand");
    if (!sectionReviews.classList.contains("reviews--expand")) sectionReviews.classList.add("reviews--collapse");
    else sectionReviews.classList.remove("reviews--collapse");
    if (!sectionReviews.classList.contains("reviews-expand")) firstReview.scrollIntoView({
        behavior: "smooth"
    });
}); /* const stickyNav = function(entries){
    const [entry] = entries;
    if(!entry.isIntersecting) header.classList.add('sticky');
    else header.classList.remove('sticky');
    console.log(entry);
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
});

headerObserver.observe(header); */  /* const revealSection = function(entries, observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
};

const sectionObserver = new IntersectionObserver(revealSection,{
    root: null,
    threshold: 0.15,
});

allSections.forEach(function(section){
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
}); */ 

//# sourceMappingURL=index.dffb2d51.js.map
