// WELCOME PAGE
// welcome text
const welcomeText = "Hello there, traveller!\nYou've just arrived at the edge of a magical world.\nBefore you begin, what should everyone call you?"
const welcome = document.getElementById("welcomeText");
// welcome audio
const sound = document.getElementById('mySound');
const playButton = document.getElementById('playButton');
let index = 0;
// name PopUp
let namePopUp = document.getElementById("namePopUp");
let playerName = document.getElementById("playerName");
// overlay
const overlay = document.getElementById("overlay");
// greeting text
const greetingText = "Wonderful! It is nice to meet you.\nThe road is full of friends who need your help.\nAre you ready to start your first journey?"
const greeting = document.getElementById("greetingText");
// chapter PopUp
const chapterOnePopUp = document.getElementById("chapterOnePopUp");

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
        chooseOpenPopUp();
    }
}

function chooseOpenPopUp(){
    // wait 2s befor opening the pop up
    setTimeout(() => {
        if(welcome.textContent != ""){
        openNamePopUp();
        }
        else if(greeting.textContent != ""){
            openChapterPopUp();
        }
    }, 1500);
}

// sound
playButton.addEventListener('click', function() {
  if (sound.volume === 0) {
    sound.volume = 1;
    // change the icon to pause
    playButton.className = "fa-solid fa-volume-high";
  } else {
    sound.volume = 0;
    // change the icon to play
    playButton.className = "fa-solid fa-volume-xmark";
  }
});

// type welcome text
typeText(welcomeText, welcome);

function openNamePopUp(){
    namePopUp.classList.add("openPopUp");
    // add the overlay
    addOverlay();
}

function closeNamePopUp(){
    // make sure player enters one char
    const name = playerName.value.trim();
    if(name.length < 1){
        alert("Please enter at least one character!");
        return;
    }

    namePopUp.classList.remove("openPopUp");
    // make the overlay invisible
    removeOverlay();

    index = 0; // reset the index back to 0
    welcome.textContent = ""; // remove the welcome text

    sound.src = "audios/greetingTextAudio.mp3";
    sound.playbackRate = 1.2;
    typeText(greetingText, greeting); // type the greeting text
}

function addOverlay(){
    overlay.style.visibility = "visible";
    overlay.style.opacity = "0.5";
}

function removeOverlay(){
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
}

function openChapterPopUp(){
    chapterOnePopUp.classList.add("openPopUp");
    addOverlay();
}

function closeChapterPopUp(){
    chapterOnePopUp.classList.remove("openPopUp");
    removeOverlay();
}