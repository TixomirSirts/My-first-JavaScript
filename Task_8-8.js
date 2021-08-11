let sqrMap_7 = new Map();
let i = 0;
do {
    sqrMap_7.set(i, Math.pow(7, i));
    // console.log(`Ключ - ${i}, ` + `значение - ${sqrMap_7.get(i)}`)
    i++;
} while (i <= 4);

for (let [key, value] of sqrMap_7) {
    console.log(`Ключ - ${key}, значение - ${value}`);
}