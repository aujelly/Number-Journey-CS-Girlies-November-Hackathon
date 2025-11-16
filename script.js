//welcome page
const welcomeText = "Hello there, traveller!\nYou've just arrived at the edge of a magical world.\nBefore you begin, what should everyone call you?"
const welcome = document.getElementById("welcomeText");
//welcome audio
//const welcomeAudio = new Audio("audios/welcomeTextAudio.mp3");
const sound = document.getElementById('mySound');
const playButton = document.getElementById('playButton');
let index = 0;

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
        console.log("HEy");
    }
}

playButton.addEventListener('click', function() {
  if (sound.paused) {
    sound.play();
    //change the icon to pause
    playButton.className = 'fas fa-pause';
  } else {
    sound.pause();
    //change the icon to play
    playButton.className = 'fas fa-play';
  }
});
typeText(welcomeText, welcome);