//starting variables
let cpuGen = 0; //starts at 0 for cpu Random number generator to work
let cpuPlay = " ";
let playerPlay = "";
let playerScore = 0;
let cpuScore = 0;
let results = "ERROR"; //Allows for troubleshooting if results were to ever not work properly
let rounds = 1;

function getComputerChoice() { //Gives us CPU's Play
    
    cpuGen = Math.floor(Math.random() * 6) + 1;
    if (cpuGen == 1 || cpuGen == 2) {
        cpuPlay = "rock";
    }
    else if (cpuGen == 3 || cpuGen == 4) {
        cpuPlay = "paper";
    }
    else if (cpuGen == 5 || cpuGen == 6) {
        cpuPlay = "scissors";
    }
    
}

function getHumanChoice() { //Prompts player for Play and assigns it a case insensitive variable
    
    let humanRun = 'true'
    while (humanRun == 'true') {
        playerPlay = prompt('What is your play? ')
        if (playerPlay == 1 || playerPlay.toLowerCase() == 'rock') {
            playerPlay = 'rock';
            humanRun = 'false';
        }
        else if (playerPlay == 2 || playerPlay.toLowerCase() == 'paper') {
            playerPlay = 'paper';
            humanRun = 'false';
        }
        else if (playerPlay == 3 || playerPlay.toLowerCase() == 'scissors') {
            playerPlay = "scissors";
            humanRun = 'false';
        }
        else {
            alert("Not a valid Play!");
        }
    }
    
    
}




function playRound() { // plays the round out
    
    //Doesn't do anything, just don't want to change it lmao
    const humanChoice = playerPlay;
    const computerChoice = cpuPlay;
    
    if (humanChoice == computerChoice) {
        results = "it's a tie!"
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper') {
        results = "You lose!";
        cpuScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        results = "You lose!";
        cpuScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        results = "You lose!";
        cpuScore++;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        results = 'You win!';
        playerScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        results = 'You win!';
        playerScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        results = 'You win!';
        playerScore++;
    }
    
    console.log(results);
}
 
while (rounds <= 5) { //Plays full 5 round game
    cpuGen = 0;
    cpuPlay = "";

    results = "";
    
    console.log("Current Round: " + rounds);
    
    getComputerChoice();
    
    getHumanChoice();

    console.log( 'Your Play: ' + playerPlay);

    console.log("CPU's Play: " + cpuPlay);

    playRound();
    rounds++;
    console.log("round is now: " + rounds);

}
//Tells player their score and CPU's score at end of game
console.log("Game over! your score: " + playerScore);
console.log("Computers score: " + cpuScore);



