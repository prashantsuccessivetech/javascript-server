//1st object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log(target, source);

//2nd object.create()
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'prashant';
me.isHuman = true;

me.printIntroduction();


//3rd Object.defineProperties()

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 50,
    writable: true
  },
  property2: {}
});

console.log(object1.property1);


//4th Object.freeze()

const obj = {
    prop: 70
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  
  console.log(obj.prop);


  //5th Object.getOwnPropertynames()


  const object3 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  console.log(Object.getOwnPropertyNames(object3));


  //6th Object.getOwnPropertySymbols()


  const object4 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object4[a] = 'localSymbol';
object4[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object4);

console.log(objectSymbols.length);


//7th Object.isExtensible()


const object5 = {};

console.log(Object.isExtensible(object5));

Object.preventExtensions(object5);

console.log(Object.isExtensible(object5));


//8th Object.keys()

const object6 = {
    x: 'somestring',
    y: 42,
    z: false
  };
  
  console.log(Object.keys(object6));


  //9th Object.setPrototypeof()


  var Animal = {  
    speak() {  
      console.log(this.name + ' makes');  
    }  
 };  
   
 class Dog {  
    constructor(name) {  
    this.name = name;  
   }  
 }  
   
 Object.setPrototypeOf(Dog.prototype, Animal);     
 var d = new Dog('people');  
 d.speak(); 
 
 
 //10th Object.values()


 const object7 = {
    a: 'somestring',
    b: 40,
    c: true
  };
  
  console.log(Object.values(object7));




