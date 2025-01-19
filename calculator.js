const btn = document.getElementById('btn');
const first = document.getElementById('first');
const operator = document.getElementById('operator');
const second = document.getElementById('second');
const result = document.getElementById('result');

function calcluate () {
    switch(operator.value) {
        case '+':
            result.innerHTML = `${+first.value + +second.value}`
            break;
        case '-':
            result.innerHTML = `${+first.value - +second.value}`
            break;
        case '*':
            result.innerHTML = `${+first.value * +second.value}`
            break;
        case '/':
            result.innerHTML = `${+first.value / +second.value}`
            break;
        default: 
            result.innerHTML = `To'g'ri yozing`
    }
}

btn.addEventListener('click', () => {
    calcluate()
})