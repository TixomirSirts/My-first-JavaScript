const arr = [0, 1, 2, 3, 4, 5, 6, 'семь', null, undefined, false]
let taxZero = 0,
    taxOdd = 0,
    taxEven = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(i + `. ${arr[i]}` + ` ${typeof arr[i]}`);
    if (typeof arr[i] === 'number') {
        if (arr[i] === 0) {
            taxZero++;
        } else {
            if (arr[i] % 2 === 1) {
                taxOdd++;
            } else {
                taxEven++;
            }
        }
    }
}
console.log('Нулей в массиве: ' + taxZero);
console.log('Нечетных чисел: ' + taxOdd);
console.log('Четных чисел: ' + taxEven);