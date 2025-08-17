let operator = "%"; //+,-,*,/
let num1 = 10;
let num2 = 5;
let result; 

switch (operator)
{
  case "+": 
    result = num1+num2;
    console.log("Result of addition: ", result);
    break;

  
  case "-": 
    result = num1-num2;
    console.log("Result of subtraction: ", result);
    break;
    
  case "*": 
    result = num1*num2;
    console.log("Result of multiplication: ", result);
    break;

  case "/": 
    result = num1/num2;
    console.log("Result of division: ", result);
    break;
    
  default: 
    console.log("Invalid operator");
}

