let checkNumber = prompt(`Введите, пожалуйста, положительное целое число больше нуля, чтобы узнать четное оно или нечетное`);
checkNumber++;
let checkInteger = checkNumber - Math.trunc(checkNumber);
if (checkNumber > 1 && checkInteger === 0) {
        let checkNan = Boolean(checkNumber);
        if (checkNan) {
            let parity = checkNumber % 2;
            if (parity === 1) {
                console.log('Число: ' + (checkNumber - 1) + ' - четное');
            } else {
                console.log('Число: ' + (checkNumber - 1) + ' - нечетное');
            }
        }
} else {
    console.log('Упс, кажется, вы ошиблись');
}