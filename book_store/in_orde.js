// function logOne() {
//   setTimeout(function() {
//     console.log("one!");
//   }, Math.random() * 1000);
// }

// function logTwo() {
//   setTimeout(function() {
//     console.log("two!");
//   }, Math.random() * 5000);
// }

// function inOrder(logOne, logTwo) {
//   Promise.resolve(logOne()).then(logTwo())
// //  console.log(logOne(), logTwo())
// }
// inOrder(logOne, logTwo);



// Write a function called inOrder that accepts two callbacks and invokes them in order. Implement inOrder using the callback pattern.
// var logOne = setTimeout(function() {
//   console.log("one!");
// }, Math.random() * 1000);
// var logTwo = setTimeout(function() {
//   console.log("two!");
// }, Math.random() * 1000);
// inOrder(logOne, logTwo);
// // one
// // two
// // it should always log those two in order regardless of their timing
// * Refactor inOrder to use promises.


async function inOrder(logOne, logTwo) {
  await logOne()
  await logTwo()
}

function logOne() {
  return new Promise( function (resolve, reject) {
     setTimeout(function() {
      resolve(console.log("one!"));
    }, Math.random() * 1000);
  })
}

async function logTwo() {
  return new Promise( function (resolve, reject) {
     setTimeout(function() {
      resolve (console.log("two!"));
    }, Math.random() * 1000);
  })
}

inOrder(logOne, logTwo);
