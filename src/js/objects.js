// Make hotel objects
// Fill them with data
// Make unique pricing for each hotel
const img1 = document.querySelector('.slider--image');

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
    image: 'https://cf.bstatic.com/xdata/images/hotel/max300/426620474.jpg?k=25c851feb27a3b08866563cfe680f1d81403426caf4c15715f6989d111f422b5&o=',
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
    image: 'https://www.kayak.pl/rimg/himg/44/fe/90/leonardo-61545-147068318-531165.jpg?width=1366&height=768&crop=true',
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
    image: 'https://dynl.mktgcdn.com/p/joMhXYt9SXQ1szz1GFDO2pPEaSpYSaPQc0KRKmxZZYk/600x450.jpg',
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
    image: 'https://u.profitroom.pl/2020-arkonpark-dobryhotel-com/thumb/1920x1080/uploads/APG_Fasada_2_duzy_1.jpg',
};