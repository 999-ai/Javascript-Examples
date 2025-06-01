function mytest() {
    if (true) {
        var message = "I have just described this before";
    }
    console.log(message); 
}
mytest();


function yourtest() {
    if (true) {
        let message = "You have just told me";
        console.log(message); 
    }
    // console.log(message); 
}
yourtest();


for (var i = 0; i < 3; i++) {
    console.log("inside the loop:", i);
}
console.log("out the loop:", i); 





function testlet() {
    let message; 
    if (true) {
        message = "This is basic code with let";
        console.log(message); 
    }
    console.log(message); 
}
testlet();


function testlet() {
    if (true) {
        let message = "This is basic code with let";
        console.log(message); 
    }
    // console.log(message); 
}
testlet();


function testlet() {
    let message; // Declared at the top of the function
    if (true) {
        message = "This is basic code with let";
        console.log(message); 
    }
    console.log(message); 
}
testlet();


const PI = 3.14;
console.log(PI);

const colours = ["red", "green", "blue"];
colours.push("pink");
console.log(colours);

let message = "Hello world";
salute = 'Hello Javascript'; 
const name = "sibel";
const sentence = `Hello, my ${name}.`;
console.log(sentence);

let mymessage = "java script";
console.log(mymessage.length);

let yourmessage = "Java script";
console.log(yourmessage.charAt(0));
console.log(yourmessage.charAt(4));

let hermessage = "Hello";
console.log(hermessage.toUpperCase());
console.log(hermessage.toLowerCase());

let hismessage = "Hi Wicki";
console.log(hismessage.indexOf("i"));
console.log(hismessage.lastIndexOf("i"));


let ourmessage = "Javascript";
console.log(ourmessage.slice(0,4));
console.log(ourmessage.slice(4));

let theirmessage = "Javascript";
console.log(theirmessage.substring(4,10));
console.log(theirmessage.substr(4,3));

let mmessage = "Hello Javascript";
console.log(mmessage.replace("Javascript","world"));

let omessage = "I have been learning Javascript";
console.log(omessage.includes("Java"));
console.log(omessage.includes("Javascript"));


let tmessage = "I have been learning Javascript";
console.log(tmessage.startsWith("ave"));
console.log(tmessage.endsWith("ipt"));

let hmessage = "   hello world";
console.log(hmessage.trim());

let westmessage = "hello,America,The Uk";
console.log(westmessage.split(","));


function yourname(thefirstname, thelastname) {
    let yourname = thefirstname.charAt(0).toUpperCase() + thefirstname.slice(1).toLowerCase();
    let surname = thelastname.charAt(0).toUpperCase() + thelastname.slice(1).toLowerCase();
    return `${yourname} ${surname}`;
}

console.log(yourname("simon", "sue"));


function counterwords(mysentence) {
    if (typeof mysentence !== 'string') {
        return 0;
    }
    return mysentence.trim().split(/\s+/).length;
}
console.log(counterwords("Hello world. This is a test sentence."));


function validemail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    return email.includes('@') && email.endsWith('.com');
}
console.log(validemail("westorganization@.com"));


function reversedwords(word) {
    if (typeof word !== 'string') {
        return 'invalid entry';
    }
    return word.split('').reverse().join('');
}
console.log(reversedwords("java"));


function censoredwords(sentence) {
    if (typeof sentence !== 'string') {
        return '';
    }
    return sentence.replace(/difficult/g, "****");
}
console.log(censoredwords("javaScript is too difficult"));



function correctingnames(names) {
    if (!Array.isArray(names)) {
        return [];
    }

    return names.map(name => {
        if (typeof name !== 'string') {
            return "rejected";
        }
        // Make first letter uppercase, rest lowercase
        let trueName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return trueName; // Return in all cases
    });
}

names = ["Sue", "Adam", "Mary"];
console.log(correctingnames(names));


function greeting(name) {
    if (typeof name !== 'string') {
        return '';
    }
    return `Hello, ${name}!  has been learning software.`;
}
console.log(greeting("Michalle"));
