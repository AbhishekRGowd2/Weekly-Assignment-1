function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve(results);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((data) => {
          results[index] = data;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

const p1 = Promise.resolve("API 1");
const p2 = Promise.resolve("API 2");
const p3 = Promise.resolve("API 3");

customPromiseAll([p1, p2, p3]).then(console.log).catch(console.error);

/* 
How It Works

Promise.all() takes multiple promises and waits until all of them are resolved.

If all promises resolve → returns array of results
If one promise fails → immediately rejects

In this implementation:

We create a new Promise.
We store results in an array.
We track completed promises using completed.
Promise.resolve() converts normal values into promises.
Once all promises resolve, we return results.
If any promise fails, we reject immediately.
*/

/*
Time Complexity
Time Complexity: O(n)
Space Complexity: O(n)

Because we iterate through all promises once and store results.

*/

/*
Real-World Use Cases
Fetching multiple APIs together
Dashboard data loading
Parallel processing
Loading user profile + notifications + settings togethe
*/
