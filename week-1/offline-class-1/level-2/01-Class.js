// class declaration 
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

// object declaration 


let obj1 = new Animal("Dog",4);
let obj2 = new Animal("Man",2);
let obj3 = new Animal("Sanake",0);
let obj4 = new Animal("Cat",4);

console.log(obj1.describe())
console.log(obj2) 
console.log(obj3)
console.log(obj4)



// Class declaration
class Fruit {
  constructor(name, count) {
      this.name = name;
      this.count = count;
  }
}

let fruit1 = new Fruit("Mango", 40);
let fruit2 = new Fruit("Orange", 20);

console.log(`I want ${fruit1.name} of ${fruit1.count} number in my house`);
console.log(`I want ${fruit2.name} of ${fruit2.count} number in my house`);

