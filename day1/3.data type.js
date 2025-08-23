// Primitives
let str = "abcd";       // string
let bool = true;        // boolean
let u;                  // undefined
let n = null;           // null
let sym1 = Symbol("foo");
let sym2 = Symbol("foo");
let num = 21;           // number
let big = 2222222222n;  // bigint

console.log(str, bool, u, n, sym1, num, big);
console.log(sym1 === sym2); // false because of uniqueness

// Using Symbol as hidden property
const secretKey = Symbol("secret");
const obj = {
    [secretKey]: "hidden Value"
};

console.log(obj[secretKey]);  // "hidden Value"
console.log(obj.secretKey);   // undefined


// non-primitive
//  we can change the value and these are mutable data
let arr = [1, 2, 3, 4];
arr[0] = 10;
console.log(arr);//[10,2,3,4]
let object = {};
function hello() {
    console.log('hello world')
}
console.log(hello());