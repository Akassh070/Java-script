const button = document.querySelector('#btnGuess')
const btnReset = document.querySelector('#btnReset')
const btnSave=document.querySelector('#btnSave')
const number = document.querySelector('#number')
const hint = document.querySelector('#hint')
var randomNumber
var min
var max
var guessCount = 0
const generateNumber = () => {
    randomNumber = Math.floor(Math.random() * 100)
    min = 0
    max = 100
    guessCount = 0
    number.value = ''
    if(randomNumber == 0) return generateNumber()
    hint.innerHTML = `Number is between ${min} & ${max}`
}

const resetGame = () => {
    guessCount = 0
    const x = confirm('Are you sure you want to reset game ? , All current data will be lost.')
    if(x) return generateNumber()
}

const validateNumber = () => {
    const val = parseInt(number.value)
    if(!val || isNaN(val) || val > 100 || val < 0) {
        number.value = ''
        return alert('Please enter valid number 🙏🙏🙏')
    }  
    guessCount += 1
    if(val === randomNumber) {
        alert(`You won the game in ${guessCount} 🤩🤩`)
        return generateNumber()
    }
    if(val > randomNumber) {
        max = number.value
        number.innerHTML = ''
        return hint.innerHTML = `Number is between ${min} & ${max}`
    }
    if(val < randomNumber) {
        min = number.value
        number.innerHTML = ''
        return hint.innerHTML = `Number is between ${min} & ${max}`
    }
}


window.addEventListener('DOMContentLoaded' , generateNumber)
button.addEventListener('click', validateNumber)
btnReset.addEventListener('click', resetGame)
btnSave.addEventListener('click',)