'use strict'

import { renderCalendar } from "./calendar";
import { markedDay } from "./calendar";
import { renderCalendar } from "./calendar";
import { stayDuration } from "./calendar";
import { hotels as importedHotels } from "./objects";

/* import hotel_img_1 from 'src/img/hotel.jpg'
import hotel_img_2 from 'src/img/about_us_img-1.jpeg'
import hotel_img_3 from 'src/img/about_us_img-2.jpg'
import hotel_img_4 from 'src/img/hotel.jpg'
import hotel_img_5 from 'src/img/hotel.jpg' */

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
const calendar = document.querySelector('.calendar');

const btnReviews = document.querySelector('.button--reviews');
const btnArrowLeft = document.querySelector('.button--arrow-left');
const btnArrowRight = document.querySelector('.button--arrow-right');
const btnFormSubmit = document.querySelector('.form--submit');

let curSlide = 0;
let interval;
const coords = [50.0611786, 19.9373964];
const zoom = 15;
const map = L.map('map').setView(coords, zoom);
const hotels = ['OldTown', 'Cracow', 'Wawel', 'Station'];
const hotelObjects = Object.values(importedHotels);

document.querySelector('.nav--links').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav--link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});

const renderMap = async function(){
    await L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
};

const avgPrice = function(hotel){
    const prices = Object.values(hotel.price);
    const averagePrices = Math.floor(prices.reduce((acc, price) => acc + price, 0) / prices.length);
    return averagePrices;
};

const renderMarker = function(){
    hotelObjects.forEach(hotel => {
        L.marker(hotel.address.localization).addTo(map)
            .bindPopup(`
                <div class="hotel--head">
                    <img src="${hotel.image}">
                    <span>${hotel.name}</span>
                </div>
                <div class="hotel--details">
                    <div class="hotel--address">
                        <span>${hotel.address.city}, ${hotel.address.street} ${hotel.address.number}</span>
                    </div>
                    <div class="hotel--price">
                        <span>Average Price: ${avgPrice(hotel)} zł</span>
                    </div>
                    <div class="hotel--review">
                        ${hotel.review}/5⭐
                    </div>
                </div>
            `)
            .openPopup();
    });
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

const selectHotel = function(){
    const selectedHotelName = document.querySelector('.form--select').value;
    btnFormSubmit.addEventListener('click', function(){
        const selectedHotel = importedHotels[selectedHotelName];
        const startDate = stayDuration.start;
        const endDate = stayDuration.end;

        if(startDate !== null && endDate !== null && endDate >= startDate){
            const dates = Array.from({length: endDate - startDate + 1}, (_, i) => i + startDate);
            selectedHotel.availableDates.push(...dates);
        }
    });
};
selectHotel();

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

