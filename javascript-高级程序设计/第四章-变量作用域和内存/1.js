// let person = new Object();
// person.name = 'jing';
// console.log(person.name); // 'jing'

// let person = '';
// person.name = 'jing';
// console.log(person.name); // undefined

// let name1 = 'jing';
// let name2 = new String('wang');
// name1.age = 12;
// name2.age = 14;

// console.log(name1.age); // undefined
// console.log(name2.age); // 14
// console.log(typeof name1); // string
// console.log(typeof name2); // object

// let num1 = 5;
// let num2 = num1;
// console.log(num1, num2); // 5,5

// num1 = 9;
// num2 = 10;
// console.log(num1, num2); // 9,10

// let obj1 = new Object();
// let obj2 = obj1;

// obj1.name = 'jing';
// console.log(obj2.name); // jing

// obj2.name = 'wang1';
// console.log(obj1.name); //wang1

// function addTen(num) {
//   num += 10;
//   return num;
// }

// let count = 20;

// let res = addTen(count);

// console.log(count); // 20;
// console.log(res); // 30;

function setName(obj) {
  obj.name = 'jing';
  obj = new Object();
  obj.name = 'wang';
}

let person = new Object();
setName(person);
console.log(person.name); // jing
