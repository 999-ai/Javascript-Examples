function trial(){
    if(true){
        var variable="this is the first variable"}
        console.log(variable);
}
trial();
//console.log(variable);"var is function-scoped. The variable is accessible anywhere inside the function, even if it is defined inside a block like if


function thesecondtrial(){
    if(true){
        let thesecondvariable="this is the second variable";
        console.log(thesecondvariable)
    }}
    //console.log(thesecondvariable)let is block-scoped. It is only accessible within the block it is declared in

thesecondtrial();

const colours=["red","green","blue"];
colours.push("black");
console.log(colours);
//colours = ["black", "green","red","blue"]; 
//console.log(colours);A variable declared with const is constant and can not be reassigned.

let message="the homework of javascript";
console.log(message.length)
//length counts both characters and spaces.
console.log(message.charAt(0).toUpperCase()+message.slice(1).toLowerCase())
// The first part shows how to take the first letter and make it uppercase,
// whereas the second part demonstrates how to take the rest of the letters and make them lowercase.


let myvariable="Hello the world of Javascript";
console.log(myvariable.indexOf("a")),
//it finds the  index of the first "a"character
console.log(myvariable.lastIndexOf("a"))
//it finds the index of the last "a" character 
console.log(myvariable.slice(18))
//it shows from 18th index to last index


let sentence = "Learning Java script can be difficult";
console.log(sentence.replace("difficult", "easy"));
//it changes  from"difficult" to "easy"

let mysentence="Learning Java script can be difficult";
console.log(mysentence.includes("Ja"))

let entry=" you should do your homework";
console.log(entry.trim().split(" ").reverse().join(" "));


let motto="Live fast ,Die Hard";
let newmotto=motto.replace(/fast/,"***").replace(/Hard/,"***")
console.log(newmotto)