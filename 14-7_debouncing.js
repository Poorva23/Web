// Debouncing
// Controlling the number of calls to optimize the solution → making optimized call to invoke a function

console.log("Script Start");

// Debounce function waits for user to stop typing
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Get the input element correctly (slash removed from ID)
const searchinput = document.getElementById("searchInput");

// Function to handle input (this will be debounced)
function handleInput(event) {
    console.log("Input Word:", event.target.value);
}

// Wrap handleInput with debounce (500ms delay)
const debouncedInput = debounce(handleInput, 500);

// Attach event listener with debounced function
searchinput.addEventListener("input", debouncedInput);

// Async examples
setTimeout(() => {
    console.log("Async: hi (setTimeout)");
}, 0);

setInterval(() => {
    console.log("Async: hi (setInterval)");
}, 0);
