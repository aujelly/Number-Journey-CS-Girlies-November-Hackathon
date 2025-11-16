//welcome page
const welcomeText = "Hello there, traveller!\nYou've just arrived at the edge of a magical world.\nBefore you begin, what should everyone call you?"
const welcome = document.getElementById("welcomeText");
//welcome audio
//const welcomeAudio = new Audio("audios/welcomeTextAudio.mp3");
const sound = document.getElementById('mySound');
const playButton = document.getElementById('playButton');
let index = 0;
//namePopUp
let namePopUp = document.getElementById("namePopUp");
let playerName = document.getElementById("playerName");

function typeText(text, element){
    if(index < text.length){
        let char = text[index];
        if(char === "\n"){
            element.innerHTML += "<br>";
        }
        else{
            element.innerHTML += char;
        }
        index++;
        setTimeout(() => typeText(text, element), 60);
    }
    else{
        openPopUp();
    }
}

playButton.addEventListener('click', function() {
  if (sound.volume === 0) {
    sound.volume = 1;
    //change the icon to pause
    playButton.className = "fa-solid fa-volume-high";
  } else {
    sound.volume = 0;
    //change the icon to play
    playButton.className = "fa-solid fa-volume-xmark";
  }
});
typeText(welcomeText, welcome);

function openPopUp(){
    namePopUp.classList.add("openPopUp");
}

function closeNamePopUp(){
    //make sure player enters one char
    const name = playerName.value.trim();
    if(name.length < 1){
        alert("Please enter at least one character!");
        return;
    }

    namePopUp.classList.remove("openPopUp");
    welcome.textContent = ""; //remove the welcome text
}