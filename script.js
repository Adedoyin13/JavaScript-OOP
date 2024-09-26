// FOR DATE ==>

const myDate = new Date();
console.log(myDate);

console.log(myDate.getFullYear());


// OBJECT ==>

const people = {
    name : 'Bob',
    age : 24,
    isBlack : true
}
console.log(people);


// CLASS ==>

class persons {
    constructor(name, age, gender, address) {
        this.name = name
        this.age = age
        this.gender = gender
        this.address = address
    }
}


const user1 = new persons('Naheem', 10, 'Male', 'Osun');
const user2 = new persons('Opera', 50, 'Male', 'Ekiti');
const user3 = new persons('Chapo', 30, 'Male', 'Kogi');
const user4 = new persons('Roddy', 80, 'Female', 'Kwara');
const user5 = new persons('Teddy', 100, 'Others', 'Delta');
const user6 = new persons('Muby', 125, 'Male', 'Borno');
const user7 = new persons('Emmy', 150, 'Null', 'Ekiti');

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log(user6);
console.log(user7);

console.log([user1, user2]);

// USING ARROW FUNCTION ==>

const createPerson = (name, age, gender, address) => {
    const schemaCreate = {
        name,
        age,
        gender,
        address
    }
    return schemaCreate
}

const addUser = createPerson('kk', 12, 'Male', 'Lagos')
console.log(addUser);

// INHERITANCE

class Animal {    //Parent class
    alive = true;
    isBeautiful = `This is beautiful`

    eat() {    //constructori
        console.log(`This  ${this.name} can eat`);
    }

    sleep() {
        console.log(`This  ${this.name} can sleep`);
    }
}

class Rabbit extends Animal {
    name = 'rabbit'
    run() {
        console.log(`This  ${this.name} can run`);
    }
}

class Fish extends Animal {
    name = 'fish'
    swim() {
        console.log(`This  ${this.name} can swim`);
    }
}

const rabbit = new Rabbit 
console.log(rabbit);
console.log(rabbit.name);
rabbit.run()
rabbit.eat()

const fish = new Fish 
console.log(fish);
console.log(fish.name);
fish.swim()
fish.swim()

