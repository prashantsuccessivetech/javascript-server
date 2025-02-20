//1st array.form()


console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], x => x + x));


//2nd Array.prototype.concat()

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);


//3rd Array.prototype.filter()


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);



//4th lastIndexOf()


const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
console.log(animals.lastIndexOf('Tiger'));
console.log(animals.lastIndexOf('Tiger'));

//5th Array.reverse()

const array4 = ['one', 'two', 'three'];
console.log('array4:', array4);

const reversed = array4.reverse();
console.log('reversed:', reversed);
console.log('array4:', array4);


//6th Array.sort()


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array5 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array5);



//7th Array.toString()

const array6 = [1, 2, 'a', '1a'];

console.log(array6.toString());


//8th Array.values()

const array7 = ['a', 'b', 'c'];
const iterator = array7.values();

for (const value of iterator) {
    console.log(value);
  }

  //9th Array.map()

  const array8 = [1, 4, 9, 16];

  const map1 = array8.map(x => x * 2);

console.log(map1);


//10th Array.find()


const array9 = [5, 12, 8, 130, 44];

const found = array9.find(element => element > 10);

console.log(found);


//11th Array.entries()
const array11 = ['x', 'y', 'z'];

const iterator1 = array11.entries();

console.log(iterator1.next().value);
console.log(iterator1.next().value);


//12th Array.flat()

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));


//13th  Array.includes()

const array13 = [1, 2, 3];

console.log(array13.includes(2));


const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));


console.log(pets.includes('at'));

//14th Array.reduce()


const array15 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array15.reduce(reducer));


console.log(array15.reduce(reducer, 5));

//15th Array.some()

const array16 = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array16.some(even));

//16th array.every()

const isBelowThreshold = (currentValue) => currentValue < 40;

const array14 = [1, 30, 39, 29, 10, 13];

console.log(array14.every(isBelowThreshold));

//17th ayyay.foreach()


const array17 = ['a', 'b', 'c'];
array17.forEach(element => console.log(element));


   

   
