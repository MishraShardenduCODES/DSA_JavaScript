// var createCounter = function(init) {
//   let presentCount = init;

//   function increment() {
//     return ++presentCount;
//   }

//   function decrement() {
//       return --presentCount;
//   }

//   function reset() {
//       return (presentCount = init);
//   }

//   return { increment, decrement, reset };
// };

let createCounter = function(init) {
    let presentCount = init
    return {
        increment:()=> ++presentCount,
        decrement:()=> --presentCount,
        reset:()=> presentCount = init,
    }
};