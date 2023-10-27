import icon_arrow from '../img/icon_arrow3.png'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const currentYear = date.getFullYear()
let currentMonth = date.getMonth();
const currentDay = date.getDate();
const dayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay();
const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
const lastDateOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
const lastDayOfMonth = new Date(currentYear, currentMonth, firstDayOfMonth).getDay();

const sectionCalendar = document.querySelector('.calendar');
const chooseDate = document.querySelector('.choose--date');
const calendar = document.querySelector('.calendar');



chooseDate.addEventListener('click', function(){
    calendar.classList.toggle('show');
});

document.addEventListener('click', function(event){
    if(!event.target.closest('.choose--date') && !event.target.closest('.calendar'))
        calendar.classList.remove('show');
});


const renderDays = function(){
    return `
        ${Array.from({length: firstDayOfMonth}, (_, i) => `<li class="days_prev_next">${lastDateOfPreviousMonth - i}</li>`).reverse().join('')}
        ${Array.from({length: lastDay}, (_, i) => `<li>${i + 1}</li>`).join('')}
        ${Array.from({length: lastDayOfMonth}, (_, i) => `<li class="days_prev_next">${i + 1}</li>`).join('')}
    `
};

const renderDayTags = function(){
    return `
        ${dayName.map(day => `<li>${day}</li>`).join('')}
    `
};

const renderCalendar = function () {
    let html =  `
        <div class="current_year-month">
            <h2>${months[currentMonth]}, ${currentYear}</h2>
            <div class="buttons--swipe">
                <button class="btn--swipe swipe--left">
                    <img src="${icon_arrow}" class="arrow--left"/>
                </button>
                <button class="btn--swipe swipe--right">
                    <img src="${icon_arrow}" class="arrow--right"/>
                </button>
            </div>
        </div>
        <ul class="day--name">
            ${renderDayTags()}
        </ul>
        <ul class="day--date">
            ${renderDays()}
        </ul>
    `
    sectionCalendar.insertAdjacentHTML('beforeend', html);
};
renderCalendar();

const btnPrevNext = document.querySelectorAll('.btn--swipe');

btnPrevNext.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn)
        currentMonth = btn.classList.contains('swipe--left') ? currentMonth - 1 : currentMonth + 1;
        renderCalendar();
    });
});