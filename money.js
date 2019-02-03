'use strict';

let money = +prompt("Ваш бюджет на месяц?", '60000'), 
    time = prompt("Введите дату в формате YYYY-MM-DD", '19987-01-01');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько это обойдется?", '');
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' & a.length < 50){
//         console.log('done');
//         appData.expenses[a] = b;       
//     } else {

//     }

// }
let i = 0;
// while(i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько это обойдется?", '');
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' & a.length < 50){
//         console.log('done');
//         appData.expenses[a] = b;       
//     } else {

//     }
//     i++;
// }

do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько это обойдется?", '');
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' & a.length < 50){
        console.log('done');
        appData.expenses[a] = b;       
    } else {

    }
    i++;
}
while(i < 0);

appData.moneyPerDay = appData.budget / 30;
console.log("ежедневный бюджет: " + appData.moneyPerDay)
console.log(appData);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000 ) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay >= 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log('что-то пошло не так');
}

let word = "абрикос";
let i = word.charCodeAt(0);
console.log(i);
console.log(word.length);
for(i.charAt(0); i <= word.length; i++;) {
    console.log(i);
}