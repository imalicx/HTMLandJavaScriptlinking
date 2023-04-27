"use strict";

// declare all of the variables I willl need
//to hold element objects from the html page
//this will allow me to interact with them.

// greetig is a DIV tag and i can change its .innterhtml
const greeting = document.getElementById("greeting");

//nametextbox is an input tag type of textbox
// has a . value properity with its value
const nametextbox= document.getElementById("nametextbox");

//pressMeButton is a button element, it will raise
// an "onclicked" event that i want to respond to
const pressMeButton = document.getElementById("pressMeButton");

function init(){
        console.log ("hello from inside the init function!")
    //code inside the init function here will run
    //when the page is finished initalizing.

    //it does so because of the window.onload line below.

    pressMeButton.onclick = onPressMeButtonClicked;
}


//this line of code will wire up the init function to execute
//when the page is done loading.
window.onload = init;

function onPressMeButtonClicked(){
    //code inside this function should execute when the button is pressed
    console.log("greetings from inside the onPressMeButtonClicked() function!")

    let username = nametextbox.value;

    greeting.innerHTML ="Hello to ${username} from inside the onP"
}

console.log("the index.js has finished executing...");