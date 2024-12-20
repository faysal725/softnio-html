const counterContainer = document.getElementById("counter_container");

function increment() {
    console.log(counterContainer.innerText, 'asdfsdf')
    let currentNumber = counterContainer.innerText
    if (currentNumber > 0) {
        currentNumber++
        counterContainer.innerText = currentNumber;
    }
}

function decrement() {
    console.log(counterContainer.innerText, 'asdfsdf')
    let currentNumber = counterContainer.innerText
    if (currentNumber > 1) {
        currentNumber--
        counterContainer.innerText = currentNumber;
    }
}