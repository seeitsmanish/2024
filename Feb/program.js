const arr = [
    new Promise( (res,rej) => {
        setTimeout(()=>{
            console.log("first");
            res(1000)
        },3000)
    }),
    new Promise( (res,rej) => {
        setTimeout(()=>{
            console.log("second");
            res(2000)
        },0)
    }),
    new Promise( (res,rej) => {
        setTimeout(()=>{
            console.log("third");
            res(3000)
        },2000)
    }),
    new Promise( (res,rej) => {
        setTimeout(()=>{
            console.log("fourth");
            res(4000)
        },1000)
    })
]


async function executePromises(promises) {
    const promiseArr = [];
    for(const promise of promises) {
        const res = await promise;
        promiseArr.push(res);
    }


    return promiseArr;
}


executePromises(arr)
    .then((promiseArr) => {
        console.log(promiseArr);
    })  



