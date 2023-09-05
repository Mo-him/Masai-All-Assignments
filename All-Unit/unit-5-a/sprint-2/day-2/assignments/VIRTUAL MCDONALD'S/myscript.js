
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 5000);


});

myPromise.then(function fun(res) {
    if (res == "done")
    setTimeout(placeOrder(),3000)
        

})