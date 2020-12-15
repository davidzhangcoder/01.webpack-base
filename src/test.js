console.log('ok');

// var obj = new Object();

// console.log(new Object());
// obj.name2 = 1;
// Object.prototype.name3 = 'name3';
// console.log(obj);

class Person {
    constructor(){
        this.name1 = 'a'
    }

    static last_name = 'b'
}
Person.first_name = 'c';
Person.prototype.full_name='d';
console.log(new Person());
// console.log(Person.name1);
console.log('Person.last_name: ' + Person.last_name);
console.log('Person.full_name: ' + Person.full_name);
console.log('Person.full_name from instance: ' + (new Person()).full_name);

console.log('=====')

// function Dog(){
//     this.dog = 'dog';
// }

// Dog.prototype.dogname = 'dogname';
// let dog = new Dog();
// console.log(new Dog());
// console.log(dog.dog);
// console.log(dog.dogname);
// console.log(Dog.dogname);
// console.log(Dog.name3);
// console.log(dog.name3);