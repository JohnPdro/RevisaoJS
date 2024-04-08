let myDate = new Date(); // O object Date permite ver a data atual
console.log(myDate);

let myPastDate = new Date(1545, 11, 2, 10, 30, 15); // É possivel alterar a data usando os parametros vistos
let myFutureDate = new Date(2515, 0, 31, 10, 30, 15); // Os parametros são --- aaaa/mm/dd  hh/mm/ss

console.log(myPastDate);
console.log(myFutureDate);

let birthday = new Date(1985, 0, 15, 11, 15, 25);
let birthday2 = new Date(1985, 0, 15, 11, 15, 25);

// Get o mês da data (0 - 11)
console.log(birthday.getMonth());

// Get o ano inteiro (YYYY)
console.log(birthday.getFullYear());

// Get a data do mês (1 - 31)
console.log(birthday.getDate());

// Get o dia da semana (0 - 6)
console.log(birthday.getDay());

// Get a hora da data (0 - 23)
console.log(birthday.getHours());

// Get o número em milisegundos desde o primeiro dia da data selecionada
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){
    console.log("Birthdays are equal");
}else{
    console.log("Birthdays are not equal");
}