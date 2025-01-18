let paperBtn = document.querySelector('#paper')
let rockBtn = document.querySelector('#rock')
let scissorsBtn = document.querySelector('#scissors')
let restart = document.querySelector('#restart')
let playerScore = 0
let computerScore = 0


// Plays a round everytime the player clicks one of the buttons, set to run the function with the paramater in HTML!!!
function playRound(playerChoice) {

    let computerChoice = getComputerChoice();

    if (playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore += 1;
        document.getElementById("playerscore").innerHTML = "Player score is" + " " + playerScore;
        document.getElementById("computerscore").innerHTML = "Computer score is" + " " + computerScore;
        return playerScore;
    } else if (playerChoice == 'rock' && computerChoice == 'paper' ||
        playerChoice == 'paper' && computerChoice == 'scissors' ||
        playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1
        document.getElementById("computerscore").innerHTML = "Computer score is" + " " + computerScore;
        document.getElementById("playerscore").innerHTML = "Player score is" + " " + playerScore;
        return computerScore;
    } else if (playerChoice === computerChoice) {
       document.getElementById("computerscore").innerHTML = "It's a tie!"
       document.getElementById("playerscore").innerHTML = "It's a tie!"
    } 
    // Game won function!!!!!11
    if (playerScore == 5) {
        alert("You win!");
    } else if (computerScore == 5) {
        alert("You lose!");
    }
    
    // Reset the scores after a win or lose!!!
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("computerscore").innerHTML = "Restart!";
        document.getElementById("playerscore").innerHTML = "Restart!";
        rockBtn.disabled = true;
        scissorsBtn.disabled = true;
        paperBtn.disabled = true;
      return;
    }
};

// Function to get theeee computers choice, chooses a random number between 0-2!!
function getComputerChoice() {
    let computerNum = Math.floor(Math.random() * 3);

    if (computerNum === 0) {
        computerNum = 'rock'
    } else if (computerNum === 1) {
        computerNum = 'paper'
    } else {
        computerNum = 'scissors'
    };
    return computerNum;
};

// Restart button to restart da game upon win, disables extra buttons to try n prevent game breaking
restart.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerscore").innerHTML = "Player score is 0";
    document.getElementById("computerscore").innerHTML = "Computer score is 0";
    rockBtn.disabled = false;
    scissorsBtn.disabled = false;
    paperBtn.disabled = false;
});
