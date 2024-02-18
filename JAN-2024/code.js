// prototype : blueprint of methods / variables exposed by a function or class 


const dog = new Animal();

dog.__proto__  // actual implementation => equivalent to house

dog.getSound();

Animal.prototype.getSound = function() {}


class Animal {}

typeof Animal; // 'function'


const arr = [];
typeof arr; // 'object'


class Animal {
    constructor(species, sound)  {
        this.species = species;
        this.sound = sound;
    }

    getSpecies() {
        return this.species;
    }

    getSound = () => {
        return `${this.species} ${this.sound}s`;
    }
 }

function Animal(species, sound) {
     this.species = species;
     this.sound = sound

     this.getSound = () => {
         return `${this.species} ${this.sound}s`;
     }


}

Animal.prototype.getSpecies = function () {
    return this.species;
}


 const dog = new Animal('dog', 'bark');
 const cat = new Animal('cat', 'meow');

 cat.getSound = () => { ..... }


 dog.hasOwnPropertry('getSpecies') // false

 dog.hasOwnPropertry('getSound') // true 


 const obj = { name : 'John'}; 

 obj.hasOwnPropertry('name') // true 
 obj.hasOwnPropertry('toString') // false


 dog = {
    species: 'dog',
    sound: 'sound',
    getSound: () => {},

    __proto__: {
        getSpecies: function() {  }
    }
 }


 class Human extends Animal {
     constructor(name, gender) {
         super('homo sapiens', 'talk');
         this.name = name;
         this.gender = gender;
     }

     getGender() {
         return this.gender;
     }
 }


 const Manish = new Human('Manish', 'M');



 Manish.getSpecies() // 'homo spaiens';

 Manish.hasOwnProperty(getSound); //true
 

 call / apply / bind 

 this 

// Function methods
//  1. How is getting called?
//  2. Who is calling?
//  3. Any overrides?


// Arrow functions :
// inherit scope of its parent


obj.getName();
obj.displayName();

const fn = obj.getName;
fn();

const fn2 = obj.displayName;
fn2();


const obj = {
    name: 'John',
    foo : {
        getName() {
            return this.name;
        },
        displayName: () => {
            console.log(this.name)
        }
    }
    
}


obj.foo.getName(); // undefined
obj.foo.displayName(); 

const fn1 = obj.foo;

fn1.displayName(); 

fn1.getName(); 


const fn2 = obj.foo.getName;
const fn3 = obj.foo.displayName;

fn2();
fn3();

------


class Animal {....}

class Dog extends Animal {
    constructor() {
        super(....)
        #this.breed = ....;
    }


}

class Labra extends Dog {...}


class Abc extends Def,Xyz, Qwe, ... { .... }


function Abc() {


}

Object.setPrototypeOf(Abc, Def)
Object.setPrototypeOf(Abc, Xyz)
Object.setPrototypeOf(Abc, Qwe)


const obj1 = {
    key: {
        name: 'john';
        }
    }
}

const obj2 = {...obj1}; 

obj2.key.name.address = 'abc';

console.log(obj.name.address) // abc


// Composition
Abc.prototype = {...Def.prototype, ...Xyz.prototype, ...QWE.prototype, ...Abc.prototype }; // structuredClone(ES2021) => deep copy objects 


H.W : 1 => 2 levels class inheritance => function equivalent





-----

call / apply / bind :


const obj = {
    displayName(greeting) {
        console.log(`${greeting}, ${this.name}`)
    }
};


obj.displayName(); // undefined;

const users = [{name: 'Manish'},{name: 'john'}....];


users.forEach((item) => {
    obj.displayName.call(item, arg1, arg2, arg3 .... ); // Manish, John....

     obj.displayName.apply(item, [arg1, arg2, arg3 .... ]); // Manish, John....
})


[1200, 300, 400, 2100...];


Math.min(1200, 300, 400, 2100...)


Math.main(...arr);

Math.min.apply(Math, arr);

class Header extends Component {
    constructor() {
        console.log(this); // Header
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        console.log(this); // window
        this.setState(...);
    }

    render() {
        <button onClick={this.handleClick} />
    }
}


<Header />

---

Async JS 

----


