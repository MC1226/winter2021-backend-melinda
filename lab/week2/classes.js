let myFirstEmployee = {
    firstName: "Melinda",
    position: "Student",
    age: 31,
};

let myThirdEmployee = {
    firstName: "Sarah",
    position: "CEO",
}

class Employee {
    constructor(firstName, position, age) {

        if (firsName === undefined) {
            this.firstName = "MISSING NAME";
        } else {
            this.firstName = firstName;
        }

        this.position = position;
        this.age = age;
        this.energy = 100;
    }

    sayHello() {
        console.log("Hello there, my name is " + this.firstName);
    }

    work(hours) {
        this.energy = this.energy - (hours * 10);
        console.log(this.firstName + " works for " + hours + " hours.");
    }

    goHome() {
        this.energy = 100;
        console.log(this.firstName + " goes home for the day.");
    }
}

let mySecondEmployee = new Employee("Joe", "Project Manager", 25);
let myFourthEmployee = new Employee("Lisa", "Head of HR", 30);
let newEmployee = new Employee();

// saveEmployee(new Employee("Jane", "Operations", 41));

mySecondEmployee.work(4);
myFourthEmployee.work(1);

mySecondEmployee.gohome();


console.log(myFirstEmployee);
console.log(mySecondEmployee);
console.log(myFourthEmployee);
console.log(newEmployee);


function myFunction(number) {

}

myFunction(100);

