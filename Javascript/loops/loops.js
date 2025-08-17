let candies = 2;

for (let i =1; i <= candies; i++)
{
  console.log("Sticker applied to candy: ", i);
};

let fruits = ["apple", "banana", "orange", "mango"];

for(let fruitcount = 0; fruitcount < fruits.length; fruitcount++)
{
  console.log(fruits[fruitcount]);
};

console.log("New Line:");
for(let index in fruits){ console.log(fruits[index]);
}


let car = { 
  brand: "BMW",
  model: "7 Series",
  color: "Black",
  year: 2024,
}

for (let property in car)
{
  console.log(`property: ${property}, value: ${car[property]}`);
}



// Variables must be declared outside the loop
let totalSum = 0;
let numberDescriptions = [];

// For loop to iterate from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Add current number to totalSum
    totalSum += i;
    
    // Add formatted string to numberDescriptions array
    numberDescriptions.push(`Number: ${i}`);
}

//exercise
let propertyDescriptions =[];

let userData = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    
}
for(let index in userData)
{
    propertyDescriptions.push(userData[index]); 
}


// Display the final sum
console.log("Final sum:", totalSum);
console.log("Number descriptions:", numberDescriptions);

let matrix = 
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],

];

for(let row = 0; row< matrix.length; row++)
{
  for(let col=0;col < matrix[row].length; col++)
    {
      console.log("Matrix value", matrix[row][col]);
    }
  
};
