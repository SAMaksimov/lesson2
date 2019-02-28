// let word = "абрикос";
// let i = word.charCodeAt(0);
// console.log(i);
// console.log(word.length);
// for(i.charAt(0); i <= word.length; i++;) {
//     console.log(i);
// }



let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
console.log(john.health);