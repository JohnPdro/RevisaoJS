let myMessage = document.getElementById("message");

function showMessage(){
    myMessage.className = "show";
}

setTimeout(showMessage, 1000);


let colourChanger = document.getElementById("colour-changer");
let colours = ["red", "blue", "green", "pink"];
let counter = 0;

function changeColour(){

    if(counter >= colours.length){
        counter = 0;
    }

    colourChanger.style.background = colours[counter];
    counter++;

}

let myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function(){
    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped";
}
