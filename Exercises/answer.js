//Q1
class Vehicle{
    constructor(brand){
        this.brand=brand
    }
    
    descripe(){
        return "I am a"+ this.brand ;
    }
}

class Car extends Vehicle{
    constructor(brand,doors){
     super(brand);
     this.doors = doors
    }
}
const car1= new Car ("BMW",4)

console.log(car1.descripe())
console.log(car1.doors)

//Q2

 class Person{
     constructor(name,age){   
        this.name=name
        this.age=age
    }
 } 

  class Student extends Person{
    constructor(grade,name ,age){
    super(name,age);
    this.grade=grade
  }
 }
 const student1= new Student("Shara,10,5")

 console.log(student1.name);
 console.log(student1.age);
 console.log(student1.grade)

 //Q3

 class Animal{
    eat(){
        return "eating..."
    }
 }

 class Dog extends Animal{
    bark(){
        return "Woof!"
    }
 }

const dog1 = new Dog()
console.log(dog1.eat(),dog1.bark());


//Q4

class Employee{
 constructor(name,salary){
    this.name=name;
    this.salary=salary;
 }
 details(){
    return this.name + this.salary 
 }
}

class Manager extends Employee{
    constructor(department,name,salary){
        super(name,salary);
        this.department=department
    }

    details(){
        return this.name +this.salary + this.department 
    }
}

const manager1 = new Manager("kamal",50000,"IT")
console.log(manager1.details())





