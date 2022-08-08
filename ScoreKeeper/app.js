const scoreBoard = document.querySelector('#scoreBoard');
const inputGameNumber = document.querySelector('#gameNumber')
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score')

const colorRed = '#dc3545'
const colorGreen = '#20c997'
const disabledGreen = 'disabledGreen'
const disabledBlue = 'disabledBlue'
let scoreP1 = 0
let scoreP2 = 0
let scoreWin = 7
let gameOver = false

inputGameNumber.value = 7

inputGameNumber.addEventListener('input', e => {
    scoreWin = parseInt(inputGameNumber.value);
})


function updateScoreLabel(playerScore, score) {
    if (score === scoreWin) {
        playerScore.style.color = colorGreen;
        gameOver = true
        p1Button.classList.toggle(disabledBlue)
        p2Button.classList.toggle(disabledGreen)
    }
    else {
        playerScore.style.color = colorRed;
    }
    playerScore.innerText = score
}


p1Button.addEventListener('click', e => {
    if (!gameOver) {
        scoreP1++
        updateScoreLabel(p1Score, scoreP1)
    }
})

p2Button.addEventListener('click', e => {
    if (!gameOver) {
        scoreP2++
        updateScoreLabel(p2Score, scoreP2)
    }
})

resetButton.addEventListener('click', e => {
    scoreP1 = 0
    scoreP2 = 0
    scoreWin = 7
    inputGameNumber.value = "7"
    gameOver = false
    p1Score.innerText = '0'
    p2Score.innerText = '0'
    p1Score.style.color = 'black'
    p2Score.style.color = 'black'
    p1Button.classList.toggle(disabledBlue)
        p2Button.classList.toggle(disabledGreen)
})