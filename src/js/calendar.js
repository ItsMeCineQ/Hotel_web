import icon_arrow from '../img/icon_arrow3.png'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November', 'December'];
const dayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let date = new Date();
let currentYear = date.getFullYear()
let currentMonth = date.getMonth();
let firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay();
let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
let lastDateOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();

const calendar = document.querySelector('.calendar');
const chooseDate = document.querySelector('.choose--date');


chooseDate.addEventListener('click', function(){
    calendar.classList.toggle('show');
});

document.addEventListener('click', function(event){
    if(!event.target.closest('.choose--date') && !event.target.closest('.calendar') && !event.target.closest('.btn--swipe'))
        calendar.classList.remove('show');
});

const renderDays = function(){
    return `
        ${Array.from({length: firstDayOfMonth}, (_, i) => `<li class="days_prev_next list">${lastDateOfPreviousMonth - i}</li>`).reverse().join('')}
        ${Array.from({length: lastDateOfMonth}, (_, i) => {
            let isToday = i === date.getDate() - 1 && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? 'day--today' : '';
            return `<li class="${isToday} list">${i + 1}</li>`}
        ).join('')}
        ${Array.from({length: lastDayOfMonth}, (_, i) => `<li class="days_prev_next list">${i + 1}</li>`).join('')}
    `
};

const renderDayTags = function(){
    return `
        ${dayName.map(day => `<li>${day}</li>`).join('')}
    `
};



const renderCalendar = function () {
    firstDayOfMonth = new Date(currentYear, currentMonth, 0).getDay();
    lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    lastDateOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
    lastDayOfMonth = new Date(currentYear, currentMonth, firstDayOfMonth).getDay();

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
    calendar.insertAdjacentHTML('beforeend', html);

    const addEventListeners = function(){
        const btnPrevNext = document.querySelectorAll('.btn--swipe');
        btnPrevNext.forEach(btn => {
            btn.addEventListener('click', () => {
                calendar.innerHTML ='';
                currentMonth = btn.classList.contains('swipe--left') ? currentMonth - 1 : currentMonth + 1;
                if(currentMonth < 0 || currentMonth > 11){
                    date = new Date(currentYear, currentMonth);
                    currentYear = date.getFullYear();
                    currentMonth = date.getMonth();
                }else{
                    date = new Date();
                }
                    
                renderCalendar();
            });
        });
    };
    addEventListeners();

    /* const markedDay = function(){
        const stayDuration =[];
        let startDate = null;

        const listOfDays = document.querySelector('.day--date');
        listOfDays.addEventListener('click', function(e){
            if(!e.target.classList.contains('list')) return;
            
            const selectedDate = parseInt(e.target.innerText, 10);

            if(startDate === null){
                startDate = selectedDate;
                e.target.closest('.list').classList.add('selected');
            }else{
                const endDate = selectedDate;

                if(endDate < startDate){
                    stayDuration.push({start: endDate, end: startDate});
                }else{
                    stayDuration.push({start: startDate, end: endDate});
                }
                startDate = null;
                
                const daysBetween = document.querySelectorAll('.day--date list');
                daysBetween.forEach(item => {
                    const day = parseInt(item.innerText, 10);
                    if(day >= stayDuration[stayDuration.length - 1].start && day <= stayDuration[stayDuration.length -1].end){
                        item.classList.add('selected');
                    };
                });
            };
        });
    }; */
    const stayDuration = { start: null, end: null };

    const markedDay = function(){
        const listOfDays = document.querySelector('.day--date');
        listOfDays.addEventListener('click', function(e){
            if(!e.target.classList.contains('list')) return;

            const selectedDate = parseInt(e.target.innerText, 10);

            if (stayDuration.start === null) {
                stayDuration.start = selectedDate;
                e.target.closest('.list').classList.add('selected');
            } else if (stayDuration.end === null) {
                stayDuration.end = selectedDate;
                e.target.closest('.list').classList.add('selected');
                const daysBetween = document.querySelectorAll('.day--date .list');
                daysBetween.forEach(item => {
                    const day = parseInt(item.innerText, 10);
                    if (day > stayDuration.start && day < stayDuration.end) {
                        item.classList.add('days--between');
                    }
                });
            } else {
                stayDuration.start = selectedDate;
                stayDuration.end = null;
                const daysBetween = document.querySelectorAll('.day--date .list');
                daysBetween.forEach(item => {
                    item.classList.remove('days--between');
                });
                e.target.closest('.list').classList.add('days--between');
            }
        });
    };
    markedDay();
};
renderCalendar();