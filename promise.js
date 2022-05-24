JavaScript Promises
"I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  mySubmitButton(submitted); // when clicked 
  mySuccessful(went thru);  // when clicked on Submit button
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(submit, gofundme) { /* code successful */ },
  function(successful) { /* submit button is clicked */ }
);
