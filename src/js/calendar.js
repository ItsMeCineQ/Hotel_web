const months = ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const currentYear = date.getFullYear()
const currentMonth = date.getMonth();
const currentDay = date.getDate();
const dayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const sectionCalendar = document.querySelector('.calendar');

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
            ${dayName.forEach(day => `<li>${day}</li>`)}
        </ul>
        <ul class="day--date">
            <li>1</li>
        </ul>
    `
    sectionCalendar.insertAdjacentHTML('beforeend', html);
};