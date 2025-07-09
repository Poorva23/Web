// CLOSURES & MEMOIZATION

function createMultiplier() {
    let store = [];
    return function multiply(a) {
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
let mult = createMultiplier();
console.log(mult(4)); // not memo
console.log(mult(5)); // not memo
console.log(mult(4)); // memo


// CURRYING FUNCTION

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(sum(1)(2)(3));

function sum7(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return a + b + c + d + e + f + g;
                        };
                    };
                };
            };
        };
    };
}
console.log(sum7(1)(2)(3)(4)(5)(6)(7));


// *SYNCHRONOUS vs ASYNCHRONOUS*

console.log("Script Start");

setTimeout(() => {
    console.log("Async: hi (setTimeout)");
}, 0);

console.log("Synchronous: after hi");

var a = 200;
console.log("Value of a:", a);

var b = 300;
console.log("Value of b:", b);

function greet() {
    console.log("Function greet()");
}
greet();

console.log("Script End");


// *NESTED FUNCTIONS & LEXICAL SCOPE*

function outer() {
    var a = 1;
    var b = 2;
    var c = 3;

    function middle() {
        let x = 5;

        function inner() {
            console.log("Accessing outer variables from inner function:");
            console.log(a); // 1
            console.log(b); // 2
            console.log(c); // 3
        }

        inner();
    }

    middle();
}
outer();


//Synchronous VS ASynchronous
// 1. Line wise code execution --- Any order code execution
// 2. Blocking code execution --- Non blocking code execution
// 3. Javascript is Sunchronous but we have to make it ASynchronous