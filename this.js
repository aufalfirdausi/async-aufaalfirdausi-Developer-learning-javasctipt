/*function greet() {
  console.log(`Halo, saya ${this.name}`);
}

const person = { name: 'John' };
greet.call(person); // Output: Halo, saya John
//call



function introduce(greeting, punctuation) {
  console.log(`${greeting}, saya ${this.name}${punctuation}`);
}

const person = { name: 'John' };
introduce.apply(person,["hai", "!"]); // Output: Hai, saya John!
//apply


const person = { 
  name: 'John',
  greet() {
      console.log(`Halo, saya ${this.name}`);
  }
};

const unboundGreet = person.greet;
const boundGreet = person.greet.bind(person);

unboundGreet(); // Output: Halo, saya undefined
boundGreet();   // Output: Halo, saya John
//bind 


function calculate (x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(calculate.call(null, 1, 2, 3));
//method borrowing (call)

function calculate (x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(calculate.apply(null,numbers));
//method borrowing (applly)
*/

class Person {
  constructor(name, age) {
    this.name = "aufa";
    this.age = 50;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person()
person.greet();

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Memanggil constructor parent class
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

const student1 = new Student('Alice', 20, 'A');
student1.greet(); // Method dari Person
student1.study(); // Method dari Student





