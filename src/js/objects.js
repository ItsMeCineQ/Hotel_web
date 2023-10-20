// Make hotel objects
// Fill them with data
// Make unique pricing for each hotel

export const OldTown = {
    name: 'Old Town Hotel',
    address: {
        city: 'Kraków',
        street: 'Świętego Tomasza',
        localization: '',
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
    }
};

export const Cracow = {
    name: 'Cracow Hotel',
    address: {
        city: 'Kraków',
        street: 'Józefa Starego',
        localization: '',
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
};

export const Wawel = {
    name: 'Wawel Hotel',
    address: {
        city: 'Kraków',
        street: 'Wawel',
        localization: '',
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
};

export const Station = {
    name: 'Main Station Hotel',
    address: {
        city: 'Kraków',
        street: 'Lubicz',
        localization: '',
    },
    rooms: {
        standard: [1, 2, 3, 4, 5, 6],
        premium: [7, 8, 9, 10, 11, 12],
    },
    price: {
        standard: 250,
        premium: 300,
    },
};