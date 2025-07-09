// HOISTING
// Hoisting: Variables & functions are moved to top of scope during compilation

console.log("Script Start");

setTimeout(() => {
    console.log("setTimeout: hii");
}, 2000);

// Example of var hoisting issue (i is global)
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log("Loop i:", i); // Will log 6 six times
    }, 2000);
}

// DATA HIDING / ENCAPSULATION / MEMOIZATION
// Memoization using closure

function memoizeMultiply() {
    let store = {};
    return function (a) {
        if (store[a]) {
            console.log("memo");
            return store[a];
        }
        console.log("not memo");
        let result = a * 5;
        store[a] = result;
        return result;
    };
}
let multiply = memoizeMultiply();
console.log(multiply(4)); // not memo
console.log(multiply(5)); // not memo
console.log(multiply(4)); // memo

// HIGHER ORDER FUNCTION
// HOF: Pass function as argument or return function

function sumOfTwo(a, b) {
    return a + b;
}
function calculate(logic, a, b) {
    return logic(a, b);
}
const ans = calculate(sumOfTwo, 2, 3);
console.log("Sum using HOF:", ans);

// EMI CALCULATION EXAMPLE

function calculateEMI(fees) {
    return fees / 10;
}
function studentDetails(name, fees) {
    var emi = calculateEMI(fees);
    return name + " " + fees + " " + emi;
}
var output = studentDetails("ravneet", 30000);
console.log(output);

// CALLBACK FUNCTION & CALLBACK HELL

function checkName(cb) {
    console.log("check menu");
    setTimeout(cb, 3000);
}
function orderPlace(cb) {
    console.log("ordered placed");
    setTimeout(cb, 5000);
}
function orderSurvey(cb) {
    console.log("order survey");
    setTimeout(cb, 10000);
}
function eatFood(cb) {
    console.log("eating food");
    setTimeout(cb, 15000);
}
function billPay(cb) {
    console.log("payment done");
    setTimeout(cb, 2000);
}
function saufEat(cb) {
    console.log("sauf eating");
    setTimeout(cb, 2000);
}
function exit() {
    setTimeout(() => {
        console.log("exit");
    }, 3000);
}

// Callback Hell (Pyramid of Doom)
checkName(() => {
    orderPlace(() => {
        orderSurvey(() => {
            eatFood(() => {
                billPay(() => {
                    saufEat(() => {
                        exit();
                    });
                });
            });
        });
    });
});

console.log("Script End");

//ARRAY METHODS: MAP / FILTER / REDUCE

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Custom MAP using prototype
Array.prototype.myMap = function (logic) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};
function double(x) {
    return x * 2;
}
const doubled = arr.myMap(double);
console.log("Doubled:", doubled);

// Custom FILTER using prototype
Array.prototype.myFilter = function (logic) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        if (logic(this[i])) {
            output.push(this[i]);
        }
    }
    return output;
};
const filtered = arr.myFilter((x) => x % 2 === 0);
console.log("Even numbers:", filtered);

// REDUCE using built-in
const array1 = [1, 2, 3, 4];

const sum = array1.reduce((acc, cur) => acc + cur, 0);
console.log("Sum using reduce:", sum);

const sum1 = array1.reduce(function (acc, cur) {
    return acc + cur;
});
console.log("Sum1:", sum1);

const product = array1.reduce(function (acc, cur) {
    return acc * cur;
});
console.log("Product using reduce:", product);

// PROTOTYPE INHERITANCE
// Prototypes allow JS objects to inherit properties/methods