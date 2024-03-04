async function executeSequentially(promiseArray) {
 
    let chain = Promise.resolve();
 
    promiseArray.forEach((promise) => {
 
        chain = chain
                .then(() => {
                    return promise()
                })
                .catch(() => {
                    return promise();
                })
    })
 
    return chain;
}
 
 
 
const p1 = () =>  new Promise((res, rej) => {
    console.log("P2")
    setTimeout(() => {
        console.log("p1 promise executed");
        res();
    },1000)
})
 
const p2 = () =>  new Promise((res, rej) => {
    console.log("P2")
    setTimeout(() => {
        console.log("p2 promise executed");
        rej();
    },1500)
})
 
 
const p3 = () =>  new Promise((res, rej) => {
    console.log("P3")
    setTimeout(() => {
        console.log("p3 promise executed");
        res();
    },0)
})
 
 
const arr = [p1, p2, p3];
 
executeSequentially(arr).then(() => {
    console.log("All promises executed sequetially");
})


console.log()

