function Helloworld(){
    console.log("hello world")}
Helloworld()
function greeting(name){
    console.log(`Hello,${name}`)}
greeting("Simon")
function total(a,b){
    return (a+b)
}
let result=total(3,7)
console.log(result)

let nummer=[10,20,30]
let items=[25,"setInterval",788]

let fruechte=["Apfel","Kirsche","Banane"]
fruechte.push("Kiwi")
console.log(fruechte)

let gemüse=["tomaten","gurke","zitrone"]
let löschte=gemüse.pop()
console.log(gemüse)
console.log(löschte)

let numbers=[10,20,30,40]
let newnumbers=numbers.slice(1,4)
console.log(newnumbers)
console.log(numbers)

let sprachfamilie=["phyton","java","javascript","Sql","C++"]
sprachfamilie.splice(1,2)
console.log(sprachfamilie)

let spiel=["Deutsch","Englisch"]
spiel.splice(1,0,"Türkisch")
console.log(spiel)

let busch=["2025","The future of AI","Economic Crisis in Turkey"]
busch.push("Republics In The world")
console.log(busch)

busch.pop()
console.log(busch)

alt=busch.slice(0,2)
console.log(alt)

busch.splice(1,1,"Sunlight in the Coast")
console.log(busch)

let fruit=["apple","babanas","cucumber"]
  for(let i=0;i<fruit.length; i++)
    {console.log(i,fruit[i])}

let orders=["kebap","pizza","ayran"]
orders.push("cola")
console.log(orders)
orders.pop()
console.log(orders)
odd=orders.slice(1,3)
console.log(odd)
orders.splice(2,0,"Turkish pizza")
console.log(orders)

let notes=[60,80,50,95,40]
let thehighestnumber=Math.max(...notes);
let theleastnumber=Math.min(...notes)

console.log(thehighestnumber)
console.log(theleastnumber)

let mytotal=0;
 for(let ii=0;ii<notes.length;ii++)
 {mytotal=mytotal+notes[ii]}
console.log(mytotal/notes.length)


let notes_=[60,80,50,95,40]
let successfulstudents=[];
let unsuccessfulstudents=[]
  for(let ii=0;ii<notes_.length;ii++)
   if(notes_[ii]>50)
    {successfulstudents.push(notes_[ii])}
   else
   {unsuccessfulstudents.push(notes_[ii])}
console.log(successfulstudents)
console.log(unsuccessfulstudents)

let basket=[{product:"book",price:30},{product:"pen",price:5},{product:"pencil",price:10}];

basket.push({product:"yoghurt", price:25})
console.log(basket)

let sum=0
for(let iii=0;iii<basket.length;iii++)
 {sum=sum+basket[iii].price}
console.log(sum)

let films = ["Matrix", "Inception", "Interstellar", "Joker"];
films.sort()
console.log(films)

let wanted_film="Matrix"
let filmindex=films.indexOf(wanted_film)
if (filmindex!=-1)
    {console.log(`${wanted_film} is found`)}
else{console.log(`${wanted_film} is not found`)}

let unwanted_film="Intercellar";
let unwanted_filmindex=films.indexOf(unwanted_film)
if  (unwanted_filmindex!=-1)
    {films.splice(2,1)}
console.log(`${unwanted_film} is deleted`)

let team = ["Simon", "Alien", "Adam", "Mary"];
team.push("Lue")
console.log(team)
team.sort()
console.log(team)



 








