let str = "hello, world";
console.log(str);

let str2 = str.slice(2, 9); // O method slice corta a string no caso do caractere na posição 2 até a posição 9
console.log(str2);

let str3 = str.slice(2);
console.log(str3);

let tags = "meat, ham, salami, pork, beef, chicken"
console.log(tags)

let tagsArray = tags.split(","); // O method split separa todas as string que contem um separador no caso a "," e retorna os valores dentro de um array
console.log(tagsArray)