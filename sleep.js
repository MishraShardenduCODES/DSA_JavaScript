function sleep(millis, callback) {
    setTimeout(callback, millis);
}

sleep(1000, () => {
    console.log('1 second has passed');
});


let promise = new Promise(function(resolve, reject) {
    // asynchronous code that eventually calls resolve() or reject()
});

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}
