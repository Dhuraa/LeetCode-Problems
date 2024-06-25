// Promises
// Javascript
// Revisit Again

var addTwoPromises = async function(promise1, promise2) {
    let arr = await Promise.all([promise1,promise2]);
    return arr[0]+arr[1];
 };
 
 
 promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
 promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
 
 console.log(addTwoPromises(promise1,promise2));