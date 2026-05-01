function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const searchHandler = debounce(() => {
  console.log("Searching...");
}, 500);

window.addEventListener("keyup", searchHandler);

/*
How It Works

Debouncing delays function execution until the user stops triggering the event for a specified time.

Every time the function is called:

Previous timer is cleared
New timer starts
Function executes only after delay completes

This prevents unnecessary repeated executions.

*/

/*
How It Works

Debouncing delays function execution until the user stops triggering the event for a specified time.

Every time the function is called:

Previous timer is cleared
New timer starts
Function executes only after delay completes

This prevents unnecessary repeated executions.

Why Closure Is Used

The inner function remembers the timer variable even after the outer function execution finishes.
*/

/*
Time Complexity
Time Complexity: O(1)
Space Complexity: O(1)
Real-World Use Cases
Search autocomplete
API call optimization
Window resize events
Preventing excessive button clicks
Reducing unnecessary re-renders
*/
