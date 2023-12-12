let roundDiv = document.querySelector('#roundDiv');
let winReqDiv = document.querySelector('#winReqDiv');
let summaryOneDiv = document.querySelector('#summaryOneDiv');
let summaryTwoDiv = document.querySelector('#summaryTwoDiv');
let starterDiv = document.querySelector('#starterDiv');
let selectionsDiv = document.querySelector('#selectionsDiv');
let nextRoundDiv = document.querySelector('#nextRoundDiv');
let scoresDiv = document.querySelector('#scoresDiv');

let startBtn = document.querySelector('#startBtn');
let rockBtn = document.querySelector('#rockBtn');
let paperBtn = document.querySelector('#paperBtn');
let scissorsBtn = document.querySelector('#scissorsBtn');
let nextRoundBtn = document.querySelector('#nextRoundBtn');

let playerScoreBox = document.querySelector('#playerScoreBox');
let computerScoreBox = document.querySelector('#computerScoreBox');

let roundCount;
let computerScore;
let playerScore;
let roundWinner;

startBtn.addEventListener('click', startNewGame );
nextRoundBtn.addEventListener('click', () => { 
    nextRoundGo(roundWinner); 
});
rockBtn.addEventListener('click', () => {
    playRound('rock');
});
paperBtn.addEventListener('click', () => {
    playRound('paper');
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});

function displayNumbers() {
    roundDiv.textContent = `Round ${roundCount}`;
    playerScoreBox.textContent = `${playerScore}`;
    computerScoreBox.textContent = `${computerScore}`;
}


function startNewGame() {
    starterDiv.style.display = 'none';

    roundDiv.style.display = 'block';
    winReqDiv.style.display = 'block';
    summaryOneDiv.style.display = 'block';
    summaryTwoDiv.style.display = 'block';
    selectionsDiv.style.display = 'block';
    scoresDiv.style.display = 'flex';

    computerScoreBox.classList.remove('winner');
    playerScoreBox.classList.remove('winner');

    roundCount = 1;
    computerScore = 0;
    playerScore = 0;

    displayNumbers();

    summaryOneDiv.textContent = 'Choose your weapon!';
}



function getComputerChoice() {
    let selector = Math.floor(Math.random() * 100);
    let computerChoice;
    if (selector >= 0 && selector <= 33) {
        computerChoice = 'rock';
    } else if (selector >= 34 && selector <= 66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    summaryOneDiv.textContent = `It's your ${playerSelection} versus the computer's ${computerSelection}`;
    selectionsDiv.style.display = 'none';
    nextRoundDiv.style.display = 'block';

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
        summaryTwoDiv.textContent = `It's a tie. Let's replay that round`;
        return;
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            roundWinner = 'computer';
            summaryTwoDiv.textContent = `The computer wins Round ${roundCount}`;
            computerScore++;
        } else {
            roundWinner = 'player';
            summaryTwoDiv.textContent = `You win Round ${roundCount}!`;
            playerScore++;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            roundWinner = 'player';
            summaryTwoDiv.textContent = `You win Round ${roundCount}!`;
            playerScore++;
        } else {
            roundWinner = 'computer';
            summaryTwoDiv.textContent = `The computer wins Round ${roundCount}`;
            computerScore++;
        }
    } else if (playerSelection = 'scissors') {
        if (computerSelection === 'rock') {
            roundWinner = 'computer';
            summaryTwoDiv.textContent = `The computer wins Round ${roundCount}`;
            computerScore++;
        } else {
            roundWinner = 'player';
            summaryTwoDiv.textContent = `You win Round ${roundCount}!`;
            playerScore++;
        }
    }
    displayNumbers();

}

function nextRoundGo(roundWinner) {
    if (playerScore >= 5 || computerScore >= 5) {
        declareWinner();
    } else if (roundWinner === 'player' || roundWinner === 'computer') {
        roundCount++;
        displayNumbers();
        summaryOneDiv.textContent = `Choose your weapon!`;
        summaryTwoDiv.textContent = '';
        selectionsDiv.style.display = 'block';
        nextRoundDiv.style.display = 'none';
    } else if (roundWinner === 'tie') {
        summaryOneDiv.textContent = `Choose your weapon!`;
        summaryTwoDiv.textContent = '';
        selectionsDiv.style.display = 'block';
        nextRoundDiv.style.display = 'none';
    }
}

function declareWinner() {
    if (playerScore >= 5) {
        roundDiv.textContent = 'You win!';
        summaryOneDiv.textContent = `You have defeated the computer in ${roundCount} rounds and shown exceptional skill. Congratulations!`;
        summaryTwoDiv.textContent = '';
        winReqDiv.style.display = 'none';
        starterDiv.style.display = 'block';
        playerScoreBox.classList.add('winner');
        nextRoundDiv.style.display = 'none';
    } else if (computerScore >= 5) {
        roundDiv.textContent = 'You lose...';
        summaryOneDiv.textContent = `You have been defeated by the computer in ${roundCount} rounds. You should be ashamed at your lack of skill. Get good.`;
        summaryTwoDiv.textContent = '';
        winReqDiv.style.display = 'none';
        starterDiv.style.display = 'block';
        computerScoreBox.classList.add('winner');
        nextRoundDiv.style.display = 'none';
    }
    return;
}


