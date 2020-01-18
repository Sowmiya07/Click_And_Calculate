const numberSpanElement = document.querySelectorAll('.number')
const operatorSpanElement = document.querySelector('.operator')
const valueBox = document.querySelector('.value')
const numbersBox = document.querySelector('.numbers')
const operatorsBox = document.querySelector('.operators')

var queryString = ''
var LHS = 0
var RHS = 0

numbersBox.addEventListener('click', function(event) {
    if(event.target.className === 'number') {
        queryString += event.target.innerText
        valueBox.innerText = queryString
    }
})

operatorsBox.addEventListener('click', function (event) {
    if (event.target.className === 'operator') {
        queryString += event.target.innerText
        valueBox.innerText = queryString
    }
})