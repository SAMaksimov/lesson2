"use strict";
let startBtn                = document.getElementById('start'),
    budgetValue             = document.getElementsByClassName('budget-value')[0],
    daybudgetValue          = document.getElementsByClassName('daybudget-value')[0],
    levelValue              = document.getElementsByClassName('level-value')[0],
    expensesValue           = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue   = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue             = document.getElementsByClassName('income-value')[0],
    monthSavingsValue       = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue        = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem            = document.getElementsByClassName('expenses-item'),
    checkSavings            = document.getElementById('savings'),
    chooseIncomeInput       = document.getElementById('income'),
    expensesItemBtn         = document.getElementsByTagName('button')[0],
    optionalExpensesItem    = document.getElementsByClassName('optionalexpenses-item'),
    optionalExpensesBtn     = document.getElementsByTagName('button')[1],
    countBudgetBtn          = document.getElementsByTagName('button')[2],
    income                  = document.querySelector('#income'),
    savings                 = document.querySelector('#savings'),
    sumValue                = document.querySelector('#sum'),
    percentValue            = document.querySelector('#percent'),
    yearValue               = document.querySelector('.year-value'),
    monthValue              = document.querySelector('.month-value'),
    dayValue                = document.querySelector('.day-value');

let money, time;

function start () {
   
}

start();

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '1987-01-01');
    money = +prompt("Ваш бюджет на месяц?", '60000');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '60000');
    }
    while(time == "" || time == null) {
        time = prompt("Введите дату в формате YYYY-MM-DD", '1987-01-01');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ( (typeof(a)) === 'string' && (typeof(a)) != null 
            && (typeof(b)) != null
            && a != '' && b != '' & a.length < 50){
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log('something go wrong');
        }
    }
    expensesValue.textContent = sum;
})

countBudgetBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
        daybudgetValue.textContent = appData.moneyPerDay = (appData.budget / 30).toFixed();
        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000 ) {
            levelValue.textContent = "Средний уровень достатка";
        } else if(appData.moneyPerDay >= 2000 ) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = 'что-то пошло не так';
        }
    } else {
        daybudgetValue.textContent = "Сначала начните расчет!";
    }
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
    }
});

chooseIncomeInput.addEventListener('input', function() {
    let items = chooseIncomeInput.value;
    incomeValue.textContent = appData.income = items.split(', ');
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome  = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
})

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {

        let sum = +sumValue.value,
            percent = +percentValue.value;
            
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome  = sum/100*percent;
    
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
})

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}