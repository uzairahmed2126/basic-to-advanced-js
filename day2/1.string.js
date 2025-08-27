// boxing is the concept that happening on using string method when we call any method it's make a wrapper and from this wrapper it's added the method and after that the wrapper is closed.
let str = "abc";
// console.log(str.toUpperCase())// it will make the string upper case
// console.log(str.toLowerCase())// it will make the string lower case
// console.log(str.charAt(0))//same as indexOf() gives element or value
// console.log(str.charCodeAt(0))//gives ascii code
// console.log(str.length)//length
// console.log(str.indexOf('a'))//index of first founded value
// console.log(str.lastIndexOf('b'))// lastindex of founded value

// console.log("a".localeCompare("A", "en", { sensitivity: "base" }));//it will compare with sensitivity and more cases
// console.log(str.slice(0, 1))// it will break the string like abc slice(0,1) a 
// console.log(str.split(''))//it will gives an array
// console.log(str.codePointAt('a'))//it takes value and gives the ascii
// console.log(str.concat('abc'))//it will concat with existing string
// console.log(str.endsWith('c'))//check is ends with the given value or not output comes in boolean 
// console.log(str.includes('c'))//it will check the value is included or not if it occurs at first then it will stop
// console.log(str.repeat(4))//it will repeat the value
// console.log(str.match(/^e/g))// it is takes regex and give's the output if not exist it will throw null
// const text = "Email me at test@example.com and also at hello@example.com";
// const matches = text.matchAll(/\b[\w.-]+@[\w.-]+\.\w{2,}\b/g);

// for (const match of matches) {
//     console.log(match);
// }

console.log(str.search(''))// Finds the first substring match in a regular expression search
console.log(str.valueOf('a'))
console.log(str.padStart(str.length+1,'*'));
console.log(str.padEnd(str.length+1,'*'));