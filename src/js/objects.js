// Make hotel objects
// Fill them with data
// Make unique pricing for each hotel

export const OldTown = {
    name: 'Old Town Hotel',
    address: {
        city: 'Kraków',
        street: 'Świętego Tomasza',
        number: 21,
        localization: [50.0636644, 19.9367054],
    },
    rooms: {
        standard: [1, 2, 3, 4],
        premium: [5, 6, 7, 8],
        deluxe: [9, 10, 11, 12],
    },
    price: {
        standard: 250,
        premium: 300,
        deluxe: 400,
    },
    calcPrice: function(duration){
        if(duration >= 3 && duration <= 7) price * 0.9;
        if(duration >= 8) price * 0.85;
    },
    review: 4.6,
    image: 'https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768',
};

export const Cracow = {
    name: 'Cracow Hotel',
    address: {
        city: 'Kraków',
        street: 'Józefa Starego',
        number: 59,
        localization: [50.0569229, 19.9410478],
    },
    rooms: {
        standard: [101, 102, 103],
        premium: [201, 202, 203],
        superior: [301, 302, 303],
        deluxe: [401, 402, 403],
    },
    price: {
        standard: 300,
        premium: 370,
        superior: 450,
        deluxe: 500,
    },
    review: 4.7,
    image: '../src/img/slider_hotel.jpg',
};

export const Wawel = {
    name: 'Wawel Hotel',
    address: {
        city: 'Kraków',
        street: 'Podzamcze',
        number: 33,
        localization: [50.0557622, 19.9333749],
    },
    rooms: {
        premium: [1.1, 1.2, 1.3],
        superior: [2.1, 2.2, 2.3],
        deluxe: [3.1, 3.2, 3.3],
    },
    price: {
        premium: 350,
        superior: 400,
        deluxe: 460,
    },
    review: 4.8,
    image: '../src/img/slider_hotel.jpg',
};

export const Station = {
    name: 'Main Station Hotel',
    address: {
        city: 'Kraków',
        street: 'Lubicz',
        number: 64,
        localization: [50.0647482, 19.9471013],
    },
    rooms: {
        standard: [1, 2, 3, 4, 5, 6],
        premium: [7, 8, 9, 10, 11, 12],
    },
    price: {
        standard: 250,
        premium: 300,
    },
    review: 4.2,
    image: '../src/img/slider_hotel.jpg',
};