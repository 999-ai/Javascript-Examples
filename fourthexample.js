//1-writing the alphabets respectively
function alphabets(){
const alphabet="abcdefghijklmnopqrstuvwxyz";

for (let i=0; i<alphabet.length;i++)
{console.log(alphabet[i])}}

alphabets()

//2-finding total of the digit place in a number
function sumOfDigits(number) {
    let sum = 0;
    const digits = number.toString().split('');
    for (let digit of digits) {
        sum += parseInt(digit, 10);
    }
    return sum;
}
console.log("sum of digits:"+sumOfDigits(12345)); 

//3-Reversing an array
function reversing_array(array){
    let reversed_array=[];
    for (let i=array.length-1; i>=0; i--)
        {reversed_array.push(array[i])}
    return reversed_array;}
console.log(reversing_array([1,2,3,4]))

//4-Finding a number in an array
function finding_number(array1, number) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === number) {
            console.log(`${number} you are looking for is found`);
            return; 
        }
    }
    console.log(`${number} is not found`);
}

finding_number([1, 2, 3, 4], 3); 

//5-Finding the biggest number
function finding_thebiggestnumber(array){
    if(array.lenght===0){
     return `array is empty`}
    let max=array[0]
    for(let i=0;i<array.length;i++){
        if(max<array[i])
            max=array[i]
    }
    return max
}
console.log(finding_thebiggestnumber([1,2,3,4]))

//6-Calculating factorial
function factorial(n){
    if(n<0){
        return `factorial of ${n} is not calculated`
    }
    else if(n===0||n===1){
        return `factorial of ${n} is 1` 
    }
    else {
        let fact=1;
        for(let i=1;i<=n;i++){
            fact*=i;
           
           
        }
        return fact
       
    }
}
console.log(factorial(5))

//7-Dividing numbers
function maths(num1,num2){
    const operation=num2!=0? num1/num2 :"wrong operation"
    return operation
}
    
console.log(maths(5,0))
//8-

let line = 5;

for (let i = 1; i <= line; i++) {
    console.log(" ".repeat(line - i) + "*".repeat(2 * i - 1));
}
//array
//let numbers=[10,20,30,40];
//let mixed=["Hello",25,true];

//9-Push ()
let fruits=["apple","avocado"];
fruits.push("strawberries","bananas")
console.log(fruits)
//10-pop()
let vegetables=["tomatoes","pepper","eggplant"]
let deleted_item=vegetables.pop()
console.log(deleted_item)
console.log(vegetables)
//11-slice()
let numbers=[10,20,30,40,50];
let new_array=numbers.slice(1,4);
console.log(new_array);
console.log(numbers);
//12-splice()
let languages=["Phyton","JavaScript","C++","java"];
languages.splice(1,2);
console.log(languages);
//13.
let games=["CS:GO","Dota"];
games.splice(1,0,"Valorant","Overwatch");
console.log(games);
//14.Making a booklist
//-adding a newbook into booklist
let booklist=["Sefiller","Suç ve Ceza","Kayıp zaman izinde"];
booklist.push("1984");
console.log(booklist);
//-delete a book title from the booklist
deleted_item1=booklist.pop();
console.log(deleted_item1);
console.log(booklist);
//-choose two book titles from the here
let new_booklist=booklist.slice(0,2);
console.log(new_booklist);
//-opting for two booklist and adding new ones into the list.
booklist.splice(1,2,"Lal","Crisis in Turkey Economy");
console.log(booklist);
//15-for loop
let oils=["n-3","n-6","n-9"];
for (let item=0;item<oils.length;item++){
    console.log(oils[item],item)
}

//16-making german order list
let bestellungen = ["Kebap", "Lahmacun", "Döner"];

// addition of new orders
bestellungen.push("Pizza", "Salat");

// cancelling the last order
bestellungen.pop();

// selection of the second and third order
let ausgewählteBestellungen = bestellungen.slice(1, 3);

//  adding new order without cancelling  the former order
bestellungen.splice(2, 0, "Nudeln");

// putting orders in order alphabetically
bestellungen.sort();

// showing the last order
console.log("Aktuelle Bestellungen:", bestellungen);
console.log("Ausgewählte Bestellungen:", ausgewählteBestellungen);

//17-note list
let notes = [60, 80, 50, 95, 40];
//finding the highest and lowest note
let thehighest_note = Math.max(...notes);
console.log(thehighest_note)
let thelowest_note = Math.min(...notes);
console.log(thelowest_note)
//aritmetical average
let average=notes.reduce((total,note)=>total+note,0)/notes.length;
console.log(`average:${average}`)
//-deciding who is passed or failed
let passed = notes.filter(note => note >= 60);
console.log(passed);
let failed=notes.filter(note => note<= 60);
console.log(failed)
//18-making a shopping list
//adding a new product
let basket=[{"product":"book","price":30},{"product":"pencil","price":5},{"product":"notebook","price":10}]
basket.push({"product":"eraser","price":8})
console.log(basket)
//deleting a certain product from the shopping list
basket=basket.filter(item => item.product!=="eraser")
console.log(basket)
//calculating total price
let total=basket.reduce((total,item)=>total+item.price,0);
console.log(total)
//19-making film list
//arraying the film list alphabetically
let films=["matrix","Inception","Interstellar","Joker"]
films.sort()
console.log(films)
//finding a film which you look for
let lookedfor_film="Inception";
console.log(films.includes(lookedfor_film))
//deleting a film you wanted
let new_filmlist=films.filter(film=> film!=="Inception")
console.log(new_filmlist)
//20-making a soccer team
let team=["Adam","Simon","john"];
team.push("Tesla_x","neil");
console.log(team)
//organizing the team
team.sort()
console.log(team)//It organizes the array based on Unicode order
//20-basic fuction example
function Hello_world() {
    console.log("Hello world");
}
Hello_world();
//21-
function greet(name){
    console.log(`Hello ${name}`)
}
greet("Mary")
//22-increasing array

let n = 5;

for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= i;j++) {
    line += j + " ";
  }
  console.log(line); 
}
//23-Decreasing array

let n1 = 5;

for (let i = n1; i >= 1; i--) {
  let line = "";
  for (let j = i; j >= 1; j--) {
    line += j + " ";
  }
  console.log(line.trim());
}
//24-summation of array
let sum=0;
for(j=1;j<=5;j++){
    sum+=j;
}
console.log(`summation:${sum}`)
//25-summation of even numbers
let sum1=0;
let no=5;
for (item=1;item<=no;item++){
    if(item%2==0)
        {sum1+=item}
    }
console.log(`summation of even numbers:${sum1}`)
//26-summation of odd numbers
let sum2=0;
let myno=5;
for (item=1;item<=myno;item++){
    if(item%2!==0)
        {sum2+=item}
    }
console.log(`summation of even numbers:${sum2}`)



 
 
