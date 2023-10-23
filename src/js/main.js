'use strict'

import { OldTown } from "./objects";
import { Cracow } from "./objects";
import { Wawel } from "./objects";
import { Station } from "./objects";

const header = document.querySelector('.header');
const sectionHome = document.querySelector('#home');
const sectionSlider = document.querySelector('.slider--container');
const sliderImages = document.querySelectorAll('.slider--image');
const sectionBook = document.querySelector('#book');
const sectionMap = document.querySelector('.map--container');
const sectionAboutUs = document.querySelector('#about_us');
const sectionReviews = document.querySelector('#reviews');
const sectionContact = document.querySelector('#contact');
const navLink = document.querySelectorAll('.nav--link');
const firstReview = document.querySelector('.first--review');
const bottomRevievs = document.querySelector('.reviews--bottom');
const headerStickySections = document.querySelectorAll('.sticky--nav');
const allSections = document.querySelectorAll('.section');
const iconArrow = document.querySelector('.icon--arrow');

const btnReviews = document.querySelector('.button--reviews');
const btnArrowLeft = document.querySelector('.button--arrow-left');
const btnArrowRight = document.querySelector('.button--arrow-right');

let curSlide = 0;
let interval;
const coords = [50.0611786, 19.9373964];
const zoom = 15;

const map = L.map('map').setView(coords, zoom);


document.querySelector('.nav--links').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav--link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});

const renderMap = function(){
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
};

const renderMarker = function(){
    L.marker(OldTown.address.localization).addTo(map)
        .bindPopup('Old Town Hotel')
        .openPopup();
    
    L.marker(Cracow.address.localization).addTo(map)
        .bindPopup('Cracow Hotel')
        .openPopup();
    
    L.marker(Wawel.address.localization).addTo(map)
        .bindPopup('Wawel Hotel')
        .openPopup();
    
    L.marker(Station.address.localization).addTo(map)
        .bindPopup('Station Hotel')
        .openPopup();
};

const App = function(){
    renderMap();
    renderMarker();
}

btnReviews.addEventListener('click', function(){
    sectionReviews.classList.toggle('reviews--expand');
    btnReviews.classList.toggle('button--reviews-expand');
    btnReviews.classList.toggle('expand');
    iconArrow.classList.toggle('rotate');
    /* bottomRevievs.classList.toggle('reviews--bottom-hidden'); */
    if(!sectionReviews.classList.contains('reviews--expand')){
        sectionReviews.classList.add('reviews--collapse');
    }
    else {
        sectionReviews.classList.remove('reviews--collapse');
    }
    if(!sectionReviews.classList.contains('reviews-expand')) firstReview.scrollIntoView({behavior: 'smooth'});
});

sliderImages.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
});

const nextSlide = function(){
    if(curSlide === sliderImages.length - 1) curSlide = -1;
    curSlide++;
    sliderImages.forEach((s, i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`);
};

const previousSlide = function(){
    if(curSlide === 0) curSlide = sliderImages.length;
    curSlide--;
    sliderImages.forEach((s, i) => s.style.transform = `translateX(${100 * (i - curSlide)}%)`);
};

btnArrowRight.addEventListener('click', function(){
    clearInterval(interval);
    nextSlide();
    autoSlider();
});
btnArrowLeft.addEventListener('click', function(){
    clearInterval(interval);
    previousSlide();
    autoSlider();
});

const autoSlider = () => {
    interval = setInterval(nextSlide, 5000);
};

autoSlider();

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

/* const showImage = function(index){
    sliderImages.forEach((img, i) => {
        if(i === index) Image.style.display = 'block';
        else Image.style.display = 'none';
    });
};
 */

/* const stickyNav = function(entries){
    const [entry] = entries;
    if(!entry.isIntersecting) header.classList.add('sticky');
    else header.classList.remove('sticky');
    console.log(entry);
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
});

headerObserver.observe(header); */

/* const revealSection = function(entries, observer){
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

App();