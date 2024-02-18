const obj = {
    name: "something",
    age: 21
}
class A {

    constructor(name) {
        this.name = name
        this.fun = this.fun.bind(this);
        this.gun = this.gun.bind(obj);
    }
    fun() {
        console.log(this);
    }

    gun = () => {
        console.log(this);
    }
}

const a = new A("Hii");



const fn = a.fun;
fn();

const gn = a.gun;
gn();


const b = new A('Goo!');
const gun_b = b.gun;
gun_b();