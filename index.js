let homescore = document.getElementById("home-num")
function homeAdd1(){
    let currentscore = Number(homescore.textContent)
    homescore.textContent = currentscore + 1
}
function homeAdd2(){
    let currentscore = Number(homescore.textContent)
    homescore.textContent = currentscore + 2
}
function homeAdd3(){
    let currentscore = Number(homescore.textContent)
    homescore.textContent = currentscore + 3
}


let guestscore = document.getElementById("guest-num")
function guestAdd1(){
    let currentscore = Number(guestscore.textContent)
    guestscore.textContent = currentscore + 1
}
function guestAdd2(){
    let currentscore = Number(guestscore.textContent)
    guestscore.textContent = currentscore + 2
}
function guestAdd3(){
    let currentscore = Number(guestscore.textContent)
    guestscore.textContent = currentscore + 3
}



function reset(){
    homescore.textContent = 0;
    guestscore.textContent = 0;
}