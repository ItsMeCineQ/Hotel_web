'use strict'

const nav = document.querySelector('.nav--menu');
const sectionAboutUs = document.querySelector('.about_us--container');
const allSections = document.querySelectorAll('.section');

const initialCoords = sectionAboutUs.getBoundingClientRect();

window.addEventListener('scroll', function(event){
    console.log(window.scrollY);

    if(window.scrollY > initialCoords.top) nav.classList.add('sticky') 
    else nav.classList.remove('sticky');
})


const revealSection = function(entries, observer){
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
}

const sectionObserver = new IntersectionObserver(revealSection,{
    root: null,
    threshold: 0.15,
});

allSections.forEach(function(section){
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});