function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

const person1 = new Person('Shardendu', 20);
const person2 = new Person('Mishra', 25);

console.log(person1.greet()); // "Hello, my name is Shardendu and I am 20 years old."
console.log(person2.greet()); // "Hello, my name is Mishra and I am 25 years old."
