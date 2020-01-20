const clearButton = document.querySelector(".clear");
const valueBox = document.querySelector(".value");
const numbersBox = document.querySelector(".numbers");
const operatorsBox = document.querySelector(".operators");

var queryString = "";

numbersBox.addEventListener('click', function (event) {
    if (event.target.className.search("digit") !== -1) {
        queryString += event.target.innerText
        valueBox.innerText = queryString
    }

    if (event.target.className.search("equals") !== -1) {
        queryString = eval(queryString)
        valueBox.innerText = queryString
    }
})


operatorsBox.addEventListener('click', function (event) {
    if (event.target.className.search("symbol") !== -1) {
        queryString += event.target.innerText
        valueBox.innerText = queryString
    }
})

clearButton.addEventListener('click', function () {
    queryString = ''
    valueBox.innerText = queryString
})
