//starting variables
let cpuGen = 0;
let cpuPlay = " ";
let playerPlay = "";
let playerScore = 0;
let cpuScore = 0;
let results = "ERROR";

function getComputerChoice() { //Gives us CPU's Play
    
    cpuGen = Math.floor(Math.random() * 6) + 1;
    if (cpuGen == 1 || cpuGen == 2) {
        cpuPlay = "Rock";
    }
    else if (cpuGen == 3 || cpuGen == 4) {
        cpuPlay = "Paper";
    }
    else if (cpuGen == 5 || cpuGen == 6) {
        cpuPlay = "Scissors";
    }
    
}

function getHumanChoice() { //Prompts player for Play and assigns it a case insensitive variable
    
    let humanRun = 'true'
    while (humanRun == 'true') {
        playerPlay = prompt('What is your play? ')
        if (playerPlay == 1 || playerPlay.toLowerCase() == 'rock') {
            playerPlay = 'Rock';
            humanRun = 'false';
        }
        else if (playerPlay == 2 || playerPlay.toLowerCase() == 'paper') {
            playerPlay = 'Paper';
            humanRun = 'false';
        }
        else if (playerPlay == 3 || playerPlay.toLowerCase() == 'scissors') {
            playerPlay = "Scissors";
            humanRun = 'false';
        }
        else {
            alert("Not a valid Play!");
        }
    }
    
    
}




function playRound() { // plays the round out
    
    const humanChoice = playerPlay;
    const computerChoice = cpuPlay;
    
    
    console.log(results);
}
let rounds = 1; 

cpuGen = 0;
cpuPlay = "";

results = "";
    
console.log("Current Round: " + rounds);
    
getComputerChoice();
    
getHumanChoice()

console.log( 'Your Play: ' + playerPlay);

console.log("CPU's Play: " + cpuPlay);

playRound();

rounds = rounds++;





