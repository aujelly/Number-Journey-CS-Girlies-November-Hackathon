// START PAGE
const clickSound = new Audio("audios/pickSoundEffect.mp3");
clickSound.preload = "auto";

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
const greetingText = "Wonderful! It's nice to meet you.\nThe road is full of friends who need your help.\nAre you ready to start your first journey?"
const greeting = document.getElementById("greetingText");
// chapter PopUp
const chapterOnePopUp = document.getElementById("chapterOnePopUp");

// CHAPTER ONE PAGE
// opening text
const openingTextQ1first = "Oh! Hello traveller! I'm Bop.\nMy best friend Pip the bunny went to collect berries,\nbut I can't find the path he took!";
const openingTextQ1second = "I'm not so good with numbers... Could you help me count the way?"
const openingQ1 = document.getElementById("openingTextQ1");

function typeText(text, element){
    if (!element){
        return;
    }
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
    if(welcome.textContent != ""){
        openNamePopUp();
        }
        else if(greeting.textContent != ""){
            // wait 1.5s befor opening the pop up
            setTimeout(() => {
                openChapterPopUp();
            }, 1200);
        }
}

// sound button
playButton.addEventListener('click', function() {
  if (sound.volume === 0) {
    sound.volume = 1;
    // change the icon to pause
    playButton.className = "fa-solid fa-volume-high";
    localStorage.setItem("muted", "false");
  } else {
    sound.volume = 0;
    // change the icon to play
    playButton.className = "fa-solid fa-volume-xmark";
    localStorage.setItem("muted", "true");
  }
});

// sound when window just load
window.onload = () => {
    let muted = localStorage.getItem("muted");

    // make mute default
    if (muted === null) {
        muted = "true";
        localStorage.setItem("muted", "true");
    }

    if (muted === "true") {
        sound.volume = 0;
        playButton.className = "fa-solid fa-volume-xmark";
    } else {
        sound.volume = 1;
        playButton.className = "fa-solid fa-volume-high";
    }
}

// type welcome text
typeText(welcomeText, welcome);

// play button click sound
function playClick(){
    if(playButton.className === "fa-solid fa-volume-high"){
        clickSound.currentTime = 1.4; // play from 1.4s because its where the sound is
        clickSound.play();
    }
}

// click sound for button that goes to new page
function playClickPageBtn(event) {
    event.preventDefault(); // stop instant navigation

    const targetPage = event.currentTarget.getAttribute("data-target");

    // sound on, play the click sound
    if (playButton.classList.contains("fa-volume-high")) {
        
        clickSound.currentTime = 1.4;
        clickSound.play();

        // start button to welcome page
        if (targetPage === "welcomingPage.html"){
            setTimeout(() => {
            window.location.href = "welcomingPage.html";
            }, 500);
        } 
        // play chapter one button
        else if(targetPage === "chapterOne.html"){
            setTimeout(() => {
            window.location.href = "chapterOne.html";
            }, 500);
        }
        else {
            window.location.href = targetPage;
        }
    } 
    // sound off, go directly
    else {
        window.location.href = targetPage;
    }
}

// name pop up
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

// make overlay visible
function addOverlay(){
    overlay.style.visibility = "visible";
    overlay.style.opacity = "0.5";
}

// make overlay hidden
function removeOverlay(){
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
}

// chapter pop up
function openChapterPopUp(){
    chapterOnePopUp.classList.add("openPopUp");
    addOverlay();
}

// type Q1 opening text
typeText(openingTextQ1first, openingQ1);