'use strict'

const nav = document.querySelector('.nav--menu');
const sectionAboutUs = document.querySelector('.about_us--line');
const allSections = document.querySelectorAll('.section');

const stickyNav = function(entries){
    const [entry] = entries;
    if(!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

const navObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
});

navObserver.observe(nav);

const revealSection = function(entries, observer){
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
});