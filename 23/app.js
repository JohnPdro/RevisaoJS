let link = document.getElementById("test"); // Seleciona elementos pelo id
console.log(link);

console.log(link.getAttribute("href")); // Seleciona atributos neste caso "href"

console.log(link.getAttribute("class")); // Seleciona atributos neste caso "class"

link.setAttribute("class", "pie"); // Cria atributos e os nomeia

link.setAttribute("alt", "hello"); // Cria atributos e os nomeia 

link.className = "ninja"; // Cria uma class e a nomeia

console.log(link.href); 

console.log(link.style);

