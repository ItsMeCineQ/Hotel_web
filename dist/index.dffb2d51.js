"use strict";
const header = document.querySelector(".header");
const sectionAboutUs = document.querySelector(".about_us--container");
const headerStickySections = document.querySelectorAll(".sticky--nav");
const allSections = document.querySelectorAll(".section");
const stickyNav = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) header.classList.remove("sticky");
    else header.classList.add("sticky");
    console.log(entry);
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0
});
headerObserver.observe(sectionAboutUs);
const revealSection = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});
allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

//# sourceMappingURL=index.dffb2d51.js.map
