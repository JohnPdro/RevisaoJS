let myString = 'I\'m a "fun ninja" string';
console.log(myString);
console.log(myString.length); // Conta quantos caracteres tem na string
console.log(myString.toUpperCase()); // Transforma a string toda em maiuscula
console.log(myString.toLowerCase()); // Transforma a string toda em minuscula
console.log(myString.indexOf("ninja")); // Identifica em que posição a string desejada está, se o resultado for -1 é porque a palavra não existe 

if (myString.indexOf("ninja") === -1){
    console.log("the word ninja is not in the string");
}else{
    console.log("the word ninja start at position " + 
    myString.indexOf("ninja"));
}

let string1 = "abc";
let string2 = "ABC";
console.log(string1.toLowerCase() === string2.toLowerCase()); // O resulatado será true porque o method toLowerCase transforma as strings em minúscula tornando-as igual

let string3 = "abc";
let string4 = "bcd";
console.log(string3 < string4); // O resultado será true porque o "a" vem antes do "b" o que significa que ele é "menor"


