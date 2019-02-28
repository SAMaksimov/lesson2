'use strict';

let money, time;

function startAll () {
    money = +prompt("Ваш бюджет на месяц?", '60000');
    time = prompt("Введите дату в формате YYYY-MM-DD", '19987-01-01');
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '60000');
    }
    while(time == "" || time == null) {
        time = prompt("Введите дату в формате YYYY-MM-DD", '19987-01-01');
    }
}

//startAll();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько это обойдется?", '');
            if ( (typeof(a)) === 'string' && (typeof(a)) != null 
                && (typeof(b)) != null
                && a != '' && b != '' & a.length < 50){
                console.log('done');
                appData.expenses[a] = b;       
            } else {
                console.log('something go wrong');
            }
        }
    },
    chooseOptExpenses: function(){
        let a = prompt('У вас есть дополнительный заработок? (нажмите ОК, если есть, в другом случае нажмите "Отмена")', 'есть!');
        if(a != null){
            for(let i = 0; i < 3; i++){
                let a = prompt("Введите необязательную статью расходов в этом месяце", i+1),
                b = prompt("Во сколько это обойдется?", '');
            if ( (typeof(a)) === 'string' && (typeof(a)) != null 
                && (typeof(b)) != null
                && a != '' && b != '' & a.length < 50){
                console.log('done');
                appData.optionalExpenses[a] = b;       
            } else {
                console.log('something go wrong');
            }
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        console.log("ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000 ) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay >= 2000 ) {
            console.log("Высокий уровень достатка");
        } else {
            console.log('что-то пошло не так');
        }
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt ('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while( (typeof(items)) !== 'string' || items == "") {
            items = prompt ('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        } 
            appData.income = items.split(', ');
          let itemMaybe = prompt("Может что-то еще?");
        while( (typeof(itemMaybe)) !== 'string' || itemMaybe == "") {
            itemMaybe = prompt("Может что-то еще?");
        }

            appData.income.push(itemMaybe);
            appData.income.sort();
    }
}


