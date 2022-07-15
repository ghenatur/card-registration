const front = document.querySelector('.front')
const back = document.querySelector('.back')
const inputName = document.querySelector('#input-name')
const name = document.querySelector('#name')
const cardNumber = document.querySelector('#card-number')
const inputNumber = document.querySelector('#input-number')
const inputExpiration = document.querySelector('#input-expiration')
const expiration = document.querySelector('#expiration')
const inputSecurity = document.querySelector('#input-security')
const code = document.querySelector('.code')
const mark = document.querySelector('#mark')
inputName.addEventListener('input', (ev) => {
    const inputValue = ev.target.value
    name.textContent = inputValue.toUpperCase()
    if (name.textContent === '' || +inputValue) {
        name.textContent = 'NAME FIRSTNAME'
    }
    mark.textContent = inputValue.split(' ', 1)
    mark.textContent = mark.textContent[0].toUpperCase() + mark.textContent.slice(1, mark.textContent.length)
})
inputNumber.addEventListener('input', (ev) => {
    const inputValue = ev.target.value
    if (+inputValue) {
        cardNumber.textContent = inputValue.slice(0, 4) + ' ' + inputValue.slice(4, 8) + ' ' + inputValue.slice(8, 12) + ' ' + inputValue.slice(12, 16)
    }
    if (inputValue === '') {
        cardNumber.textContent = '0000 0000 0000 0000'
    }
})
inputExpiration.addEventListener('input', (ev) => {
    const inputValue = ev.target.value
    if (+inputValue.slice(0, 2) <= 12 && +inputValue[0] === 0 || +inputValue[0] === 1) {
        expiration.textContent = inputValue.slice(0, 2) + '/' + inputValue.slice(2, 4)
    } else if (inputValue === '') {
        expiration.textContent = '01/22'
    }
})
inputSecurity.addEventListener('keyup', (ev) => {
    const inputValue = ev.target.value
    if (+inputValue) {
        code.textContent = inputValue
    } else {
        code.textContent = ''
    }
})
inputSecurity.addEventListener('click', (ev) => {
    front.classList.toggle('reverse-front')
    back.classList.toggle('reverse-back')
})

