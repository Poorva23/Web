// Object, Promises, API

// object - multiple data types can be used 
let user = [
    { name: "John", age: 20 },
    { name: "ravneet", age: 20 },
    { name: "rohan", age: 25 },
    { name: "deepak", age: 24 },
];

let result = user
    .filter(person => person.age > 20)
    .map(person => person.name);

console.log(result);

// promises - are object which is having status, response  and it is asynchronous 
// status -pending, fulfilled and rejected
// promise - .then(fulfilled) and .catch(rejected)

const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolved");
    }, 3000);
});

const data = promiseA
    .then((res) => {
        console.log(res);
        return "punal get icr";
    })
    .then((res) => {
        console.log(res);
        return "punal working";
    })
    .then((res) => {
        console.log(res);
        return "punal layoff";
    })
    .catch((err) => {
        console.log(err);
    });

console.log(data);

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 1");
    }, 3000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 2");
    }, 5000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 3");
    }, 6000);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 4");
    }, 7000);
});

Promise.all([p1, p2, p3, p4])
    .then((results) => {
        console.log("Promise.all:", results);
    })
    .catch((err) => {
        console.log("Promise.all Error:", err);
    });

Promise.allSettled([p1, p2, p3, p4])
    .then((results) => {
        console.log("Promise.allsettled:", results);
    });

Promise.any([p1, p2, p3, p4])
    .then((results) => {
        console.log("Promise.any:", results);
    })
    .catch((err) => {
        console.log("Promise.any Error:", err);
    });

Promise.race([p1, p2, p3, p4])
    .then((results) => {
        console.log("Promise.race:", results);
    })
    .catch((err) => {
        console.log("Promise.race Error:", err);
    });

// promise API example

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1");
    }, 5000);
});

p5.then((res) => {
    console.log(res);
})
    .then(() => {
        setTimeout(() => {
            console.log("2");
        }, 3000);
    })
    .then(() => {
        setTimeout(() => {
            console.log("3");
        }, 2000);
    })
    .catch((err) => {
        console.log("error");
    });

// using reusable function with Promises
function something() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise");
        }, 4000);
    });
}

const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1");
    }, 5000);
});

p6.then(() => {
    return something();
})
    .then(() => {
        return something();
    })
    .then(() => {
        return something();
    })
    .then(() => {
        return something();
    })
    .catch((err) => {
        console.log("error", err);
    });

// Multiple Promises again
const pp1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 1");
    }, 3000);
});
const pp2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 2");
    }, 5000);
});
const pp3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 3");
    }, 6000);
});
const pp4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 4");
    }, 7000);
});

Promise.all([pp1, pp2, pp3, pp4])
    .then((results) => {
        console.log("Promise.all:", results);
    })
    .catch((err) => {
        console.log("Promise.all Error:", err);
    });

Promise.allSettled([pp1, pp2, pp3, pp4])
    .then((results) => {
        console.log("Promise.allSettled:", results);
    });

Promise.any([pp1, pp2, pp3, pp4])
    .then((results) => {
        console.log("Promise.any:", results);
    })
    .catch((err) => {
        console.log("Promise.any Error:", err);
    });

Promise.race([pp1, pp2, pp3, pp4])
    .then((results) => {
        console.log("Promise.race:", results);
    })
    .catch((err) => {
        console.log("Promise.race Error:", err);
    });

// async await with API call
async function apiData() {
    const data = await fetch('https://dummyjson.com/users');
    const myData = await data.json();
    console.log(myData);
    console.log(data);
}
apiData();

