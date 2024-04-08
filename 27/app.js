let title = document.getElementById("pageTitle");

title.onclick = function(){ // Adiciona o evento de onclick, acontece algo quando clicado
    alert("you clicked me");
};

title.onmouseover = function(){ // Adiciona o evento de onmouseover, acontece algo quando passar o mouse sobre 
    alert("you hovered your mouse over me")
}

