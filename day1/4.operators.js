//arithmetic operators
let a = 10;
let b = 10;
let add = a + b;//20
let minus = a - b;//0
let divide = a / b // 0
let multiplie = a * b;//100
let remainder = a % b;//0
let exponent = a ** b;//10000000000 ES7
let increment = a++;//first it will gives output then it will increment
let decrement = a--;//first it will  gives output  then it will decrement
let preIncrement = ++a;//first it will increment then gives output
let preDecrement = --a;//first it will decrement then gives output
console.log(add, minus, divide, multiplie, remainder, exponent)


//assigment operator
let c = a += b;//it will plus and assign value
let d = a -= b; // it will minus and assign value
let e = a *= b;
let divideWithAssign = a /= b;
let remainderWtihAssign = a %= b;
let exponentWithAssign = a **= b;
console.log(c, d, e, divideWithAssign, remainderWtihAssign, exponentWithAssign);

// comparison operator
a = 10, b = 10;
let strictEqualityCheck = a === b; // it will check both the type and value
let looseEqualityCheck = a == b;// it wiil check only type and check with coercion
console.log(strictEqualityCheck, looseEqualityCheck)

if (a != b) {
    console.log('not equal');
} if (a >= b) {
    console.log('a is greater than equal to b')
} if (a <= b) {
    console.log('a is less than equal to b')
} if (a < b) {
    console.log('a is less than  to b')
} if (a > b) {
    console.log('a is greater than  to b')
}

// logical operators
if (a && b) {
    console.log('a and b are equal')
} if (a || b) {
    console.log('if one side is true then it will execute')
} if (a !== b) {
    console.log('it will not run if the both value is same')
}
if(!!a) {
    console.log('hey')
}