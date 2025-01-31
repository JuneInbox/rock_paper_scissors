let paperBtn = document.querySelector('#paper');
let rockBtn = document.querySelector('#rock');
let scissorsBtn = document.querySelector('#scissors');
let restart = document.querySelector('#restart');
let playerScore = 0;
let computerScore = 0;
let gameOver = false;  


function playRound(playerChoice) {
    if (gameOver) return; 

    let computerChoice = getComputerChoice();

    if (playerChoice == 'rock' && computerChoice == 'scissors' ||
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore += 1;
        document.getElementById("playerscore").innerHTML = "Player score is " + playerScore;
        document.getElementById("computerscore").innerHTML = "Computer score is " + computerScore;
    } else if (playerChoice == 'rock' && computerChoice == 'paper' ||
        playerChoice == 'paper' && computerChoice == 'scissors' ||
        playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        document.getElementById("computerscore").innerHTML = "Computer score is " + computerScore;
        document.getElementById("playerscore").innerHTML = "Player score is " + playerScore;
    } else if (playerChoice === computerChoice) {
        document.getElementById("computerscore").innerHTML = "It's a tie!";
        document.getElementById("playerscore").innerHTML = "It's a tie!";
    }

  
    if (playerScore == 5) {
        alert("You win!");
        gameOver = true;  
        disableButtons(); 
    } else if (computerScore == 5) {
        alert("You lose!");
        gameOver = true;  
        disableButtons(); 
    }
};


function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
};


function getComputerChoice() {
    let computerNum = Math.floor(Math.random() * 3);

    if (computerNum === 0) {
        return 'rock';
    } else if (computerNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


restart.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;  

    document.getElementById("playerscore").innerHTML = "Player score is 0";
    document.getElementById("computerscore").innerHTML = "Computer score is 0";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
});
