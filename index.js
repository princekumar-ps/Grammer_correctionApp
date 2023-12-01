import * as Grammarly from '@grammarly/editor-sdk'

Grammarly.init('client_9x4bANbictWSNXZir6n1r2')




const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");



let userChar = 0;

//to update the character on screen 

const updateCounter = () => {
    
    userChar = charVal.Value.length;

    totalCount.innerText = userChar;

    remainingCount.innerText = 150 - userChar;
};

charVal.addEventListener("keyup", () => updateCounter());

// //copy the text code

const CopyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 150);  //for mobile

    navigator.clipboard.writeText(charVal.Value);


}


