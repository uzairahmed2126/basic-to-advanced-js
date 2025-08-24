// switch case if condition rely's on perticular thing then switch case is good option
let a = true
switch (a) {
    case true: console.log("yes a is true");
        break;
    case false: console.log('i think a is false');
        break;
    default: console.log('value is diff');
}

// we can use nested if else and do some operations
if (a === true) {
    console.log('if condition is true')
} else {
    console.log('if condition is not true')
}

// loops to iterate data


// do while loop execute atleast one time either condition is true or false
let i = 0;
do {
    i += 1;
} while (i < 5) {
    console.log(i)
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
i = 0;
while (i < 5) {
    console.log(i);
    i++;
}