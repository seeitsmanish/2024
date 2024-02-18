// Only for multiple then and catch statments
// Not implemented promise chaining yet

const STATE = {
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
    PENDING: 'pending',
}

class MyPromise {
    #thenCbs = []
    #catchCbs = []
    #state = STATE.PENDING
    #value
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)

    constructor(cb) {
        try {
            cb( this.#onSuccessBind, this.#onFailBind)
        } catch (error) {
            this.#onFail(error)
        }
    }

    #runCallBacks() {
        
        if( this.#state === STATE.FULFILLED) {
            this.#thenCbs.forEach(callback => {
                callback(this.#value)
            })

            this.#thenCbs = []
        }

        if( this.#state === STATE.REJECTED) {
            this.#catchCbs.forEach(callback => {
                callback(this.#value)
            })

            this.#catchCbs = []
        }
    }

    #onSuccess(value) {
        // so that promise can only be resolved once.
        if(this.#state !== STATE.PENDING) return;
        this.value = value
        this.#state = STATE.FULFILLED
        this.#runCallBacks()
    }

    #onFail(value) {
        // so that promise can only be rejected once.
        if(this.#state !== STATE.PENDING) return;
        this.#value = value
        this.#state = STATE.REJECTED 
        this.#runCallBacks()
    }

    then(thenCb, catchCb) {

        if(thenCb != null )this.#thenCbs.push(thenCb)
        if(catchCb != null )this.#catchCbs.push(catchCb)

        this.#runCallBacks()
    }

    catch(cb) {
        this.then(undefined, cb);
    }


    finally(cb) {

    }
}

let p = new MyPromise((res, rej) => {
    setTimeout(()=> {
        rej(100);
    },2000)
} )

p.then(()=>{
    console.log(1);
    return 200;
})
p.then(()=>{
    console.log(2);
    return 200;
})
p.then(()=>{
    console.log(3);
    return 300;
})
p.catch(()=>{
    console.log("Something went wrong!")
})
p.then(()=>{
    console.log(4);
    return 400;
})
