// Question:-
// class Executor {

// }
// const obj = new Executor([task1, task2, task3...]); // can be async and sync
// obj.run();
// obj.getState();  
// {
//     state: 'completed' | 'failed' | 'not_started' | 'in_progress' | 'paused',
//     tasks: ['completed', in_progress, not_started, failed]
// }
// obj.pause();
// obj.getState();
// obj.resume();
// obj.onComplete((results) => {
    //console.log({results})
// })

/**
 * Question is construct a executor class/ function constructor
 * which will take an array of promises (can be sync or async)
 * You have to give following functionalities:-
 * 1. run() -> starts executing promises sequentially and 
 * returns a resloved promise after completetion. If you call it anytime, it will
 * restart the execution from 0th promise.
 * 2. pause() -> It will pause the execution of promises.
 * 3. resume() -> It will resume the execution of promises.
 * 4. getState() -> returns the following kind of function:-
 *    {
 *      state: 'completed' | 'failed' | 'not_started' | 'in_progress' | 'paused',
 *      tasks: ['completed', in_progress, failed, not_started]
 *    }
 * 
 *  state -> gives the state of whole executor object. 
 *          If exectution is not started then state = not_started
 *          If execution is running,  then state = in_progress
 *          If any of the promise is rejected then state = failed and execution is stopped.
 *          If execution if paused then state = paused
 */


function getPromiseFunction() {
    let promiseArr = [];

    for(let index = 1; index <= 100; index++) {
        promiseArr.push(() => {
            return new Promise((res, rej) => {
                console.log(`P${index}`);
                setTimeout(() => {
                    console.log(`P${index} executed`)
                    res();
                },Math.floor(Math.random() * 1001) + 1000)
            })
        })
    }

    return promiseArr;
}
 
const arr = getPromiseFunction() // combination of async and sync tasks

const state = {
    COMPLETED: 'completed',
    FAILED: 'failed',
    NOTSTARTED: 'not_started',
    INPROGRESS: 'in_progress',
    PAUSED: 'paused',
}

const getStateObject = (len, initial) => {
    return {
        state: state.NOTSTARTED,
        tasks: Array.from({length: len}, () => initial)
    }
}

function Executor(arr) {

    this.index = 0;

    this.stateObject = getStateObject(arr.length, state.NOTSTARTED);

    this.run = async (initial = 0) => {

        this.stateObject.state = state.INPROGRESS;

        for( this.index = initial; this.index < arr.length; this.index++) {

            if(this.stateObject.state === state.PAUSED || this.stateObject.state  === state.FAILED) break;

            let promise = arr[this.index];
            try{
                await promise();
                this.stateObject.tasks[this.index] = state.COMPLETED; 
            }
            catch(e) {
                this.stateObject.state = state.FAILED;
                this.stateObject.tasks[this.index] = state.FAILED; 
            }
        }
        if(this.index >= arr.length)
        this.stateObject.state = state.COMPLETED;
    }

    this.pause = () => {
        this.stateObject.state = state.PAUSED;
    }

    this.resume = () => {
        this.stateObject.state = state.INPROGRESS;
        this.run(this.index);
    }

    this.getState = () => {
        return this.stateObject;
    }

}

const exec = new Executor(arr);
exec.run()
.then(() => {
    console.log(exec.stateObject)
})

