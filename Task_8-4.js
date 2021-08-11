let randomNumber = Math.trunc((Math.random() * 100) + plusMinus(1));
console.log(randomNumber);

function plusMinus(sign) {
sign = Math.random() > 0.5 ? sign *= 1 : sign *= -1;
return sign;
}
   
