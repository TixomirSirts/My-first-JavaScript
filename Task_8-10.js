let checkNumber = prompt('Введите целое положительное число больше 1 и меньше 1000, чтобы узнать простое ли оно.')
let checkInteger = checkNumber - Math.trunc(checkNumber);
if (checkNumber > 1 && checkNumber < 1000 && checkInteger === 0) {
    let checkNan = Boolean(checkNumber);
    if (checkNan) {
        let checkPrime = true
        for (let i = checkNumber - 1; i > 1; i--) {
            if (checkNumber % i === 0) {
                checkPrime = false;
                // console.log(`${checkNumber} % ${i} \= ${checkNumber % i}`);
            }
        }
        let answer = checkPrime === true ? `Число ${checkNumber} - простое.` : `Число ${checkNumber} - составное.`;
        console.log(answer);
    }
} else {
    console.log('Данные введены не верно, повторите ввод');
}