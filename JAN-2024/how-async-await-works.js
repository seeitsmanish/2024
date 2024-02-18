count = 0;

function wait() {
    count++;
    return new Promise((reslove, reject) => {
        setTimeout(()=> {
            if(count == 2) {
                reject("Some error!");
            }
            reslove('Timeout resolved')
        },2000)
    })
}


function* main() {
    console.log('Entry');

    try {  
        const result1 = yield wait();
        console.log(result1);
        
    } catch (error) {
        console.log(error);
    }
 
    try {
        const result2 = yield wait();
        console.log(result2);
    } catch (error) {
        console.log(error);
    }

    try {
        const result3 = yield wait();
        console.log(result3);
    } catch (error) {
        console.log(error)
    }

    console.log('Exit');
    return 'Return';
}


run(main).then((result)=>{
    console.log(result); 
})
.catch((error) => {
    console.log(error);
})
function run(fn, ...args) { 
    const it = fn(...args);
    return new Promise((reslove, reject) => {
        function step(resolvedValue) {
            const result = it.next(resolvedValue);     
            if(result.done) {
                reslove(result.value);
                return;
            }
            result.value.then((resolvedValue) => {
                step(resolvedValue);
            })
            result.value.catch((error) => {
                it.throw("Something went wrong");
                step();
            })
        }
        step();
    })
}

// it.next().value.then((reslovedData)=>{
//     it.next(reslovedData).value.then((reslovedData)=>{
//         it.next(reslovedData).value.then((reslovedData) => {
//             it.next(reslovedData);
//         })
//     })
// })










