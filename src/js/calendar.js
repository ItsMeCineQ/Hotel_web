const months = ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const currentYear = date.getFullYear()
const currentMonth = date.getMonth();
const currentDay = date.getDate();
const dayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const sectionCalendar = document.querySelector('.calendar');
const firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay();
const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
const lastDateOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
const lastDayOfMonth = new Date(currentYear, currentMonth, firstDayOfMonth).getDay();

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

export const renderCalendar = function () {
    let html =  `
        <div class="current_year-month">
            <h2>${months[currentMonth]}, ${currentYear}</h2>
            <button class="btn--swipe swipe--left">
                <img src="src/img/icon_arrow_black.png" class="arrow--left"/>
            </button>
            <button class="btn--swipe swipe--right">
                <img src="src/img/icon_arrow_black.png" class="arrow--right"/>
            </button>
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