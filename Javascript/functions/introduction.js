function addNumbers(num1, num2)
{
  console.log("Adding two numbers ");
  return num1 + num2;

}

let result = addNumbers(5, 10);
console.log(result);

//another way to print, where the function becomes an argument in another function (in the print function)
console.log(addNumbers(10,10));

