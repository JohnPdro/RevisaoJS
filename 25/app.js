let newParagraph = document.createElement("p"); // Criação de elementos 
console.log(newParagraph);


let newLink = document.createElement("a"); // Criação de elementos 
console.log(newLink);

let artigo = document.getElementById("content").getElementsByTagName("p")[0]; // Seleciona um local do arquivo 
console.log(artigo);

console.log(artigo.appendChild(newParagraph)) // Cria um elemento dentro do local selecionado
console.log(newParagraph.appendChild(newLink)) // Cria um elemento dentro do local selecionado
newLink.innerHTML = "blog"; // Exibe o elemento criado na pagina HTML
artigo.insertBefore(newLink, artigo.getElementsByTagName("p")[0]); // Exibe o elemento no local desejado


