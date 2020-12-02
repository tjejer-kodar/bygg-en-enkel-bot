// Den här filen är bara till för att testa så att dina
// funktioner fungerar som de ska, men tjuvkika gärna!

import {
    isItSaturdayToday,
    daysUntil
} from '../saturday.js';

/**
 * This file is validating input
 */

const date = new Date();
const sunday = 7;
const saturday = 6;

function isMoreThanSevenDaysLeft() {
    return daysUntil(date) > 7;
}

function isMoreThanZeroDays() {
    return daysUntil(date) >= 0;
}

// function testAllDays() {
//     return [1, 2, 3, 4, 5, 6, 7].filter((weekday) => {
//         return daysUntil({
//             getDay: () => weekday
//         }) !== (sunday === weekday ? weekday - 1 : (saturday - weekday));
//     });
// }

function isCorrectAmountOfDays() {
    return (new Date().getDay() === sunday ? daysUntil(date) - 1 : saturday - new Date().getDay()) === daysUntil(date) ;
}

function TestIsItSaturdayToday() {
    return (saturday - new Date().getDay() === 0) === isItSaturdayToday(date);
}

function isOfTypeNumber() {
    return typeof daysUntil(date) === 'number';
}

function displayErrors(errorMessages) {
    document.getElementById('success').style.display = 'none';
    document.getElementById('fail').style.display = 'block';

    const failUl = document.getElementById('fail-ul');
    failUl.style.display = 'block';
    failUl.innerHTML = '';
    errorMessages.forEach(errorMessage => {
        const li = document.createElement('li');
        li.style.listStyle = 'decimal';
        li.innerHTML = errorMessage;
        failUl.appendChild(li);
    });
}

function displaySuccess() {
    var failUl = document.getElementById('fail-ul');
    failUl.innerHTML = '';
    document.getElementById('fail').style.display = 'none';
    document.getElementById('success').style.display = 'block';
}

function getWeekday(day) {
    switch (day) {
        case 1:
            return 'måndag';
        case 2:
            return 'tisdag';
        case 3:
            return 'onsdag';
        case 4:
            return 'torsdag'
        case 5:
            return 'fredag';
        case 6:
            return 'lördag';
        case 7:
            return 'söndag';
        }
}

export function validate() {
    let errorMessages = [];
    let skip = false;

    // if (testAllDays().length > 0) {
    //     let errorDays = '';
    //     testAllDays().forEach((day, index) => {
    //         errorDays += testAllDays().length === (index + 1) ? getWeekday(day) : getWeekday(day) + ', ';
    //     })
    //     errorMessages.push('<span class="error-span">daysUntil() - antalet dagar blev fel från följande dagar: ' + errorDays + ' </span>');
    //     skip = true;
    // }

    if (!isMoreThanZeroDays()) {
        errorMessages.push('<span class="error-span">daysUntil() - antal dagar kan inte vara mindre än 0 dagar</span>');
        skip = true;
    }

    if (isMoreThanSevenDaysLeft()) {
        errorMessages.push('<span class="error-span">daysUntil() - kan inte returnera fler än 7 dagar kvar tills nästa lördag</span>');
        skip = true;
    }

    if (!isOfTypeNumber()) {
        errorMessages.push('<span class="error-span">daysUntil() - måste returnera av typen Number</span>');
        skip = true;
    }

    if (!isCorrectAmountOfDays()) {
        errorMessages.push('<span class="error-span">daysUntil() - antal dagar kvar tills lördag stämmer inte</span>');
        skip = true;
    }

    if (!TestIsItSaturdayToday(date)) {
        errorMessages.push('<span class="error-span">isItSaturdayToday() - skulle ha returnerat false, idag är det ' + getWeekday(new Date().getDay()) + '</span>');
        skip = true;
    }

    if (errorMessages.length > 0) {
        displayErrors(errorMessages)
    } else {
        displaySuccess()
    }
}
document.getElementById('test-button').onclick = validate;
