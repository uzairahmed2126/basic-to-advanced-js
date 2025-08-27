// boxing is the concept that happening on using primitve method when we call any method it's make a wrapper and from this wrapper it's added the method and after that the wrapper is closed.
let num = 123;
console.log(num.toFixed(2))//it will add zero's
console.log(Math.random(num) * 2)
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN


// static methods of number
console.log(Number.isNaN(num));
console.log(Number.isNaN('abc'));

console.log(Number.isFinite(num))
console.log(Number.isFinite(Infinity))

console.log(Number.isInteger(num))
console.log(Number.isInteger(5.5))

console.log(Number.isSafeInteger(num))
console.log(Number.isSafeInteger(1e20))

console.log(Number.parseFloat('10.5px')) //it is giving float number

console.log(Number.parseInt('1001', 2))


//instance methods of number
// toString([radix])
console.log(num.toString());
console.log(num.toString(16));