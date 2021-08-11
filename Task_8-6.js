const arr = [1, 1, 1, 1];
let i = 0;
let checkItem = true;
let checkArr = true;
while (i < arr.length - 1) {
    checkItem = arr[i] === arr[i + 1];
    if (checkItem === false) {
        checkArr = false;
    }
    i++;
}
console.log('В массиве только одинаковые элементы? ' + checkArr);