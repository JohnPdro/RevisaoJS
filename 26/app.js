let parent = document.getElementById("box").getElementsByTagName("article")[0]; // Seleciona o local pai da tag que deseja remover no local filho
let child = parent.getElementsByTagName("a")[1]; // Seleciona a tag que deseja remover 
parent.removeChild(child); // Remove a tag

