function qtyOfZero(arr) {
    let taxZero = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === 'number') {
            if (arr[i] === 0) {
                taxZero++;
            }
        }
    }
    console.log('Нулей в массиве: ' + taxZero);
    return taxZero;
}

function qtyOfOdd(arr) {
    let taxOdd = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === 'number') {
            if (arr[i] % 2 === 1) {
                taxOdd++;
            }
        }
    }
    console.log('Нечетных чисел: ' + taxOdd);
    return taxOdd;
}

function qtyOfEven(arr) {
    let taxEven = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === 'number' && arr[i] != 0) {
            if (arr[i] % 2 != 1) {
                taxEven++;
            }
        }
    }
    console.log('Четных чисел: ' + taxEven);
    return taxEven;
}

function qtyOfNumTypes(arr) {
    qtyOfZero(arr);
    qtyOfOdd(arr);
    qtyOfEven(arr);
}

const ARR = [0, 1, 2, 3, 4, 5, 6, 'семь', null, undefined, false, 0, 0];
qtyOfNumTypes(ARR);