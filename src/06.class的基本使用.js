import React from 'react';

function People() {

}

class Person extends React.Component {

    constructor (name) {
        super();
        this.name = name;
        this.state = {
            name1 : name
        }
    }

    static country = "personcountry";

    render(){
        return <h1>this is Person Instance</h1>
    }
}

class American extends Person {

}

class Chinese extends Person {
    
}

let people = new People();
console.log(people);

let person = new Person("Jack");
console.log(person);

let person1 = new Person("Tom");
console.log(person1);

export default Person