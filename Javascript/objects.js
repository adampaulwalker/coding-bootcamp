let car = 
{
  brand: "BMW", 
  model: "7 series",
  color: "White",
  make: 2024,
  "car owner": "John", //example purposes, do not do this
  owner: { 
    name: "John",
    age:45,
  }
}
console.log("Name of the owner: ", car.owner.name);
car.owner.name = "Mark";
console.log("Rename the owner: ", car.owner.name);
console.log("model of car owner: ", car.model);


console.log(car);

console.log("Model: ", car.model);
console.log("Brand: ", car.brand);
console.log("Owner: ", car["car owner"]);

//reassign the Object

let carCopy = car;
carCopy.color = "red"; // <- creates the new copy, BUT it does modify the original
console.log("carCopy color ", carCopy);

let newCar = {...car}; //shallow copy <- creates the new copy, but doesn't modify the original
console.log("new car ", newCar);
newCar.color = "blue";
console.log("new car changed color ", newCar.color);


//other way to creat Objects

let audi = new Object();
audi.brand = "audi";
audi.model = "A7";
audi.color = "Black";
console.log(audi);
audi["car owner"] = "Mark";
console.log(audi.color);



// Nested Objects:
// audi.owner = {
//   name: "John",
//   age: 45;
// }
// console.log("owner name ", audi.owner.name);