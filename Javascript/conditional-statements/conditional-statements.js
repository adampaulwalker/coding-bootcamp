let isRaining = true;

if (isRaining){console.log("take an umbrella!");}

else {console.log("No need for an umbrella"); }

//age test

let age = 16;

if(age >= 18) {
  //execute if condition is true
  console.log("You are eligible to vote");
}

else { console.log("You are not eligible to vote")};


//else if 
let score = 55; 

if (score>=90){
  console.log("Grade A");
}

else if (score >=80)
{
  console.log("Grade B");
}

else if (score >=70)
{
  console.log("Grade C");
}
else
{ 
  console.log("Grade D");
}

//nested logic

let isWeekend = false;
let isSunny = false;

if (isWeekend)
  {
    if (isSunny)
    {
      console.log("Let's go for a picnic");
    }
    else 
      {
        console.log("Watch a movie at home")
      }
  }

  else {
  console.log("It's a weekday and time for work");
  }


  let score2 = 85;
  let grade;

if (score2>=90){ 
    grade = "A";
}
else if (score2 >=80){
    grade = "B";
}
else if (score2 >=70){
    grade = "C";
}
else if (score2 >=60){
    grade = "D";
}
else {
    grade = "F";
}