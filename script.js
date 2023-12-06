let computerChoice;

function getComputerChoice() {
    let selector = Math.floor(Math.random() * 100);
    if (selector >= 0 && selector <= 33) {
        computerChoice = 'rock';
    } else if (selector >= 34 && selector <= 66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playRound() {
    let playerSelection = (prompt(`Choose rock, paper, or scissors`)).toLowerCase();
    if (playerSelection !== 'rock' && 
        playerSelection !== 'paper' && 
        playerSelection !== 'scissors') {
            console.log(`You picked a non valid item. Try again`);
            return;
        }
    let computerSelection = getComputerChoice();

    console.log(`Your ${playerSelection} versus the computer's ${computerSelection}!`);
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return `computer`;
        } else if (computerSelection === 'scissors') {
            return `player`;
        } else {
            return `tie`;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return `player`;
        } else if (computerSelection === 'scissors') {
            return `computer`;
        } else {
            return `tie`;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return `computer`;
        } else if (computerSelection === 'paper') {
            return `player`;
        } else {
            return `tie`;
        }
    } 
}

function game() {
    console.log(`This will be a best of 5 series! Get ready!`);

    let playerWin = 0;
    let computerWin = 0;
    let roundResult;

    for (let i = 1; i < 6;  ) {

        roundResult = playRound();
        if (roundResult === 'player') {
            console.log(`Round ${i}: You win!`);
            playerWin++;
            i++;
        } else if (roundResult === 'computer') {
            console.log(`Round ${i}: You lose this round.`);
            computerWin++;
            i++;
        } else if (roundResult === 'tie') {
            console.log(`Round ${i}: Tie. Replaying this round.`)
        }
    }

    if (playerWin > computerWin) {
        console.log(`You are the ultimate champion, having won ${playerWin} rounds to the computer's ${computerWin}. Congratulations!!`);
    } else {
        console.log(`You have lost this battle, having won ${playerWin} rounds to the computer's ${computerWin}. Better luck next time!`)
    }
}


