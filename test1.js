
function test(){
    if (true){
        var message="it is described as var"
    }
    console.log(message);
}
test()
for (var i=0; i<3; i++){
    console.log("they are in the cycle i:" ,i)
}
console.log("they are not in the cycle i:",i)

function testLET() {
    if (true) {
        let message = "it is described as let"; 
        console.log(message); 
    }
}
testLET();







const colors=["red","green","blue"];
colors.push("yellow");
console.log(colors);

let message="Hello World,Javascript"
console.log(message.length)

let sentence="JavaScript"
console.log(sentence.charAt(0));
console.log(sentence.charAt(4));


let world = "hELLo";
console.log(world.toUpperCase());  
console.log(world.toLowerCase());  

let name="jOhn dOE";
console.log(name.indexOf("j"))
console.log(name.lastIndexOf("j"))

let a="Hello World";
console.log(a.slice(4))


let b="Hello World";
console.log(b.slice(0,4))

let c="Java sCRiPT"
console.log(c.substring(4,10))

let q="Java sCRiPT";
console.log(q.substr(4,3))

let word = "Hello JavaScript";
console.log(word.replace("JavaScript", "Word"));

let sin="I have been learning  Java Script";
console.log(sin.includes("JavaScript"));

let sinister="I have been learning  Java Script";
console.log(sinister.includes("Java Script"));


let myword = "Hello JavaScript";
console.log(myword.startsWith("H"))

let myword2 = "Hello JavaScript";
console.log(myword2.endsWith("ot"))

let myworld3=" Hello JavaScript ";
console.log(myworld3.trim())

let myword3=" software, java, phyton, css, html, bootstrap" 
console.log(myword3.split(" "))


let myword4 = "software, java, phyton, css, html, bootstrap";
let myfirstwords = myword4.split(",");  
console.log(myfirstwords);  
console.log(myfirstwords[0]);
console.log(myfirstwords[0][1]);



let name1 = "javaScript";
let surname = "sOFTWare node test.jsRE";

 upperfirstname = name1[0].toUpperCase();  
 uppersurname = surname[0].toUpperCase();

console.log(upperfirstname + name1.slice(1) + " " + uppersurname + surname.slice(1));


let myname = "Sibel";

for (let i = 0; i < myname.length; i++) { 
    console.log(myname[i], i); 
}

let youremailadress = "edede@gmail.com";
let youremailadress2 = "edeee@gmail";

if (youremailadress.includes("@") && youremailadress.endsWith(".com")) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}

let email="edekfödm@gmail.com";
console.log(email.split("").reverse().join())
console.log(email.split("").reverse().join(""))



let sentence1 = "Learning sofware is too easy";

if (sentence1.includes("is")) {
    sentence1 = sentence1.replace("is", "is not"); 
    console.log(sentence1); 
    
} else {
    console.log(sentence1); 
    
}

let myname1 = "sIBEl";
let surname1 = "YlD";
let at= myname1[0].toUpperCase();
let bt = surname1[0].toUpperCase();
let fullName = at + myname1.slice(1) + " " + bt + surname1.slice(1);
console.log(fullName);





prompt="Java Java Script Laravel"
 let ynamelist=prompt.split("")
console.log(ynamelist)
 

prompt="Java Java Script Laravel"
let namelist=prompt.split(" ")
console.log(namelist)

let yourfirstname="doe"
let words=  "Are you ready for learning Java Script?"
console.log("Hello"+" "+ yourfirstname[0].toUpperCase()+yourfirstname.slice(1)+" "+words)

const PI=3.14159;
console.log(PI)
PI=3.14
console.log(PI)

























