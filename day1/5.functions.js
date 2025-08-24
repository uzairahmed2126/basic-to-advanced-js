// functions are used to make code reusable (flexicity)
// normal function

function sayHello() {
    console.log("Hello");
}
sayHello();

// function with parameter it is hoisted while it is create it is gose to top of the code and we can use it everywhere in the program
function sayHelloTo(name) {
    return "Hello " + name;
}
console.log(sayHelloTo("Uzair"))

// function expression
const fun = function () {
    return "function expression"
}
console.log(fun())// it is not hoisted due to assign function expression in a variable 

// arrow function ES6 best for short function it has not own the this key it is inherit from surrounding scope
const arrowFun = () => {
    console.log("hello")
}
arrowFun()