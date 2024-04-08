let content = document.getElementById("content");
let button = document.getElementById("showMore");

button.onclick = function(){
    if(content.className == "open"){
        content.className = "";
        button.innerHTML = "mais+";
    }else{
        content.className = "open";
        button.innerHTML = "fechar";
    }
}