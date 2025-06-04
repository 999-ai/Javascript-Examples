
//1.Addition ,subtraction,multiplication and remainder of two numbers
let x=10;
let y=5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y)
//2.To check if given numbers are equal to each other  in value and type
let num1='10';
let num2=10;
console.log(num1==num2);//True
console.log(num1===num2);//False
console.log(num1!=num2);//False
console.log(num1!==num2);//True
console.log(num1<5)//False
//Note:JavaScript changes from the number as string  to that of as integer automatically.
//3.Logical operators
let value1=true;
let value2=false;
console.log(value1&&value2);//and->False
console.log(value1||value2);//or->True
console.log(!value1)//not->false
//4.Assignment operators are used to assign values or update existing value.
let number=12;
number+=5//number=number+5
console.log(number);
number*=2;//number=number*2
console.log(number)
number/=2;//number=number/2
console.log(number);
number-=2;//number=number-2
console.log(number)
//5.Using if clause
let note=58;
if(note>=90){
    console.log("AA")
}
else if (note>=80)
    {console.log("BB")}
else{
    console.log("CC")}
//6.Swich case structure is used in order to check more than one condition
let day=6;
 switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday")
        break;
    default:
        console.log("there is no option")}
//7.Calculating average of three numbers
let no1=4;
let no2=8;
let no3=6;
average=(no1+no2+no3)/3
console.log("average:",average )
//8.Finding the biggest number
let the_first_number=46;
let the_middle_number=87;
let the_last_number=63;
if(the_first_number>=the_middle_number&&the_first_number>=the_last_number)
   {console.log("the biggest number:",the_first_number)}
else if(the_middle_number>=the_first_number&&the_middle_number>=the_last_number)
   {console.log("the biggest number:",the_middle_number)}
else {console.log("the biggest number:",the_last_number)};
//it is the short way to solve the above problem
let the_biggestno=Math.max(the_first_number,the_middle_number,the_last_number)
console.log("the biggest number is"+ the_biggestno)
//9.Determining if a person is adult in terms of age
let age=18;
if(age>=18)
 {console.log(
    `${age} is proper age`)}
else {console.log(
    `${age} is not proper age`)}
//10.Calculating salary with promotion
let salary=100;
salary+=salary*0.2;//salary=salary+salary*0.2
console.log(`salary with promotion:${salary}`)
//11.Assigning a letter grade based on a score
let note1=74;
if(note1>=0 && note1 <=49){console.log("letter grade:F")}
else if(note1>=50 && note1<=59){console.log("letter grade:D")}
else if(note1>=60 && note1<=69){console.log("letter grade:C")}
else if(note1>=70 && note1<=84){console.log("letter grade:B")}
else if(note1>=85 && note1<=100){console.log("the letter grade:A")}
else{console.log("please enter a valid note")}
//12.Write a day according to number
let luckyday=3
switch (luckyday){
    case 1:
        console.log("Saturday");
        break;
    case 2 :
        console.log("Sunday");
        break
    default:
        console.log("you do not have to choose number")}
//13.Opting for even or odd number
let numb1=30;
if(numb1%2==0)
{console.log(`${numb1} is an even number`)}
else{console.log(`${numb1}is an odd number `)}
//14.Show  summation,substraction,multiplication  and division of two numbers
function  arithmetical_calculation(){
    let xx=85;
    let yy=40;
    console.log("summation is",xx+yy);
    console.log("substraction is",xx-yy);
    console.log("multiplication is",xx*yy)
    console.log("quotient is",xx/yy)
}
arithmetical_calculation()
//15.Deciding on which person is suitable for getting credit when analysing age and  wage
let your_age=14;
let wage=5200;
if(your_age>=18 && wage>=5200)
{console.log("you are proper to get credit")}
else {("you have no right to get credit owing to your conditions")}
//16.Checking if a student passed or failed
let your_note=25;
if(your_note<=50)
{console.log(`You are failed with ${your_note}`)}
else{console.log(`you passed`)}
//17.For loop from 1 to 10
for(let i=1;i<10;i++)
{console.log(i)}
//18.Iterating over array elements.
const fruits=["blueberries","cranberries","strawberries"]
for(let i=0;i<fruits.length;i++)
{console.log(fruits[i],i)}
//19.while loop exercise 1
let i1=1;
while(i1<=5){console.log(i1);i1++}
//20.while loop exercise 2
let i2=1;
while(i2<=5){i2++;console.log(i2)}
//21.Do..while loop exercise 1
const prompt = require('prompt-sync')();  // The function from prompt-sync library is called,executed and assigned to prompt variable

let number1;

do {
  number1 = parseInt(prompt("Please enter a positive number: "));
} while (number1 <= 0);

console.log("Thank you for entering a positive number.");
//22.for...in loop

const students = {
name: "Ali",
age: 20,
department: "Software Engineering"
};
for (let feature in students) {
console.log(`${feature}: ${students[feature]}`);
}

//23.continue usage
for (let ii = 1; ii <= 10; ii++) {
  if (ii === 5)
    continue;
  console.log(ii);
}
//24.break usage
for (let ii = 1; ii <= 10; ii++) {
  if (ii === 5)
    break;
  console.log(ii);
}
//25.Nested for loop
for (let iii = 1; iii <= 5; iii++) {
  for (let iiii = 1; iiii <= 5; iiii++) {
    console.log(`${iii}*${iiii}=${iii * iiii}`);
  }
}
//26.Calculating factorial
function factorial(n){
    let result=1;
    for(let i=1;i<=n;i++) 
    result*=i;
    return result}
console.log(factorial(5))
//27.write numbers from 1 to 10.
let myno=10

for(let item=1;item<=10;item++)
  {console.log(item);}
//28. Put down on the names of fruits in list with for loop
const myfruits=["avocado","strawberry","coconut"]
for(let index=0;index<myfruits.length;index++){
    console.log(myfruits[index]);
}
//29.Note the feature of items 
const teachers={"your_name": "Jane",age:"69",job:"teacher"};
for(feature in teachers){console.log(`${feature}:${teachers[feature]}`)}





























