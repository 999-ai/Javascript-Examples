//1-
let car = {
    "trademark": "Toyota",
    "model": "Corolla",
    "colour": "red"
};
console.log(car.trademark)
//2-
console.log(car["trademark"])
//3-
car.year = 2028;
console.log(car.year)
//4-
car.colour = "blue";
console.log(car.colour);
//5-
let students = {
    "name": "John",
    "age": 96,
    "adress": {
        "city": "London",
        "district": "Surrey"
    }
};
console.log(students.adress.district);
//6-
let telephone = {
    "trademark": "Apple",
    "Model": "IPHONE-14",
    "advertisement": function () { console.log("this phone is" + this.trademark + this.Model) }
}
telephone.advertisement()
//7-
let TV = {
    "trademark": "Samsung",
    "model": "LCD-8",
    "colour": "blue"
};
for (let key in TV)
    console.log(`${key}:${TV[key]}`)
//8-
console.log(Object.keys(TV));
console.log(Object.values(TV))
//9-User management
let user1 = {
    "name": "jane",
    "age": 34,
    "job": "Doctor"
}


let user2 = {
    "name": "Harry",
    "age": 98,
    "job": "dietician"
}
let user3 = {
    "name": "Ashley",
    "age": 58,
    "job": "Engineer"
}
let userlist = [user1, user2, user3];
//adding a new user
function adding_newuser(newuser) {
    userlist.push(newuser)
}
adding_newuser({ "name": "Ali", "age": 23, "job": "student" })
console.log(userlist)
//listing the userlist
function listing_userlist() {
    for (let user of userlist) {
        console.log("name:" + user.name);
        console.log("age:" + user.age);
        console.log("job:" + user.job)
    }
}
listing_userlist()
//
function deleting_user(age) {
    let index = -1;
    for (let i = 0; i < userlist.length; i++) {
        if (userlist[i].age === age) {
            index = i
            break
        }
    };
    if (index === -1) {
        console.log("user's age is not found")
    }
    else {
        userlist.splice(index, 1)

        console.log("user's age is  found")
        console.log(userlist)
    }
}
deleting_user(23)
//10-Task Management System
let tasks = [{ id: 1, title: "go_shopping", finished: false },
{ id: 2, title: "read a book", finished: true },
{ id: 3, title: "study", finished: false }]
function add_newtask(new_task) {
    tasks.push(new_task)
    console.log(tasks)
}
add_newtask({ id: 4, title: "cooking", finished: false })
//listing tasklist finished
function listing_tasklist(finished) {
    for (let task of tasks) {
        if (task.finished == finished) {
            console.log(`id:${task.id},title:${task.title},${task.finished ? "the task given is finished" : "the task given is not finished"}`)
        }
    }
}
listing_tasklist(true)
//delete a task

function del(id) {
    let index = -1;
    for (let i = 0; i < tasks.length; i++)
        if (tasks[i].id == id) {
            index = i;
            break
        }
    if (index = -1) {
        console.log(`id:${id} is not found`)
    }
    else {
        tasks.splice(index, 1)
    }

}
del(2)
//
function finished_task(id) {
    for (let task of tasks) {
        if (task.id = id) {
            task.finished = true;
            console.log("the task is completed")
        }
        return

    }
    console.log("")
}
finished_task(3)
//making shopping list
let basket = [{ name: "pen", price: 100, quantity: 20 },
{ name: "pencil", price: 20, quantity: 4 },
{ name: "socks", price: 15, quantity: 2 }
]
//
function add_anewproduct(new_product) {
    basket.push(new_product)
    console.log(basket)
}
add_anewproduct({ name: "pants", price: 20, quantity: 4 })

function add(new_product1, no) {
  for (let product of basket) {
    if (product.name === new_product1) {
      product.quantity += no;
      console.log(`name: ${product.name}, price: ${product.price}, quantity: ${product.quantity}`);
      console.log(`${new_product1} is added into basket`);
      return;
    }
  }
  // if the product you are looking for is not in the basket,
  basket.push({ name: new_product1, price: 0, quantity: no });
  console.log(`${new_product1} was not in the basket. It has been added with price: 0`);
}
add("pencil", 3)
//
function find_basket(name){
    let index=-1;
    for(let i=0;i<basket.length;i++){
        if(basket[i].name=name){
            index=i;
            break
        }
    }
    if (index==-1){
        console.log("the product can not be found")
    }
    else{
        basket.splice(index,1)
        console.log(`${name} has been removed from the basket.`);
    }}
find_basket("pen")
//
function list_basket(){
    for(let product of basket){
        console.log(`name: ${product.name}, price: ${product.price}, quantity: ${product.quantity}`);
    }
}

list_basket();

//
function calculating_total(){
    total=0
    for(let product of basket){
        total+=product.price*product.quantity
    console.log(`total:${total}`)
    }
}
calculating_total()
//library management system
let books=[{title:"Duma",writer:"Stephen King",year:2008},
     {title:"yarın yok",writer:"Ayse Kulin",year:2023}]
//
function add_abook(book_info){
    books.push(book_info)
    console.log(`${book_info.title} is in the booklist now`)
}
add_abook({title:"Peace and war",writer:"Lev Tolstoy",year:1867})
//
function show_booklist(){
    for(let book of books){
        console.log(`title:${book.title},writer:${book.writer},year:${book.year}`)}
    
}
show_booklist()
//
function lookingfor_abook(title){
    for(let book of books){
        if(book.title.toLowerCase().includes(title.toLowerCase()))
            console.log(`${title.toLowerCase()} is here in the booklist`)
    }
}
lookingfor_abook("dumA")
//
function order_books(){
    books.sort((aa,bb)=> aa.year-bb.year);
    console.log(books)
}
order_books()
//
let workers=[{name:"Gulnihal",position:"Doctor",salary:1500},
    {name:"Jack",position:"Nursery",salary:500},
    {name:"Nick",position:"Manager",salary:4500}
]
//
function adding(worker){
    workers.push(worker)
    console.log(`${worker.name} is added`)
}

adding({name:"Michael",position:"Manager",salary:500})
//
function finding(worked_searched){
    for(let worker of workers){
        if(worker.name.toUpperCase().includes(worked_searched.toUpperCase())){
            console.log(`${worker.name} is found`)
        }
    }
}
finding("jack")
//
function salary_promoted(){
    total_salary=0
    for(let worker of workers)
     total_salary+=worker.salary
    console.log(`total salary:${total_salary}`)
}
salary_promoted()
//
users=[{name:"diomand",follower_no:2000},
       {name:"Adhesive",follower_no:6000}]
function new_(user){
    users.push(user)
    console.log(`${user.name} has been in the list `)
}
new_({name:"Gary",follower_no:200})
//
function arraying(){
    users.sort((xx,yy)=> xx.follower_no-yy.follower_no)
    console.log(users)
    console.log("users are ordered according to follower numbers")
}
arraying()
//
function remove_user(user_excluded){
    for (let i = 0; i < users.length; i++)
       
       if(users[i].name==user_excluded){
         console.log(`${users[i].name} is deleted from user list `) 
         users.splice(i,1)}
        
    }
remove_user("Gary")
//
let food=[{"main_dish":"Pizza",beverage:"cola",category:"main"},
    {"main_dish":"vegan_kebap",beverage:"ayran",category:"vegan"}]
function neu(new_p){
    food.push(new_p)
    console.log("new order is here")
}
neu({"main_dish":"Mediterranean",beverage:"beer",category:"breakfast"})
//
function order_(category1){
    for (let dieatry of food)
        if(dieatry.category.toLowerCase().includes(category1.toLowerCase())){
         console.log(`${dieatry.main_dish},${dieatry.beverage},${dieatry.category}`)}
}
order_("breakfast")
//
function arraying1(){
    food.sort((cc,dd)=> cc.beverage-cc.beverage)
    console.log(food)
    console.log("beverage list ist ordered based on unicode alphabetic order")
}
arraying1()
//
function loading(name, age, note) {
    const student = {
        name,
        age,
        note,
        average: function() {
            let summation = this.note.reduce((acc, note) => acc + note, 0);
            let result = (this.note.length > 0) ? summation / this.note.length : 0;
            return result;
        }
    };
    return student;  
}

const jane = loading("jane", 7, [45, 78, 69]);
console.log(jane.average());  
//

const students1 = [
    {
        name: "Jane",
        age: 7,
        note: [45, 78, 69],
        average: function () {
            let sum = this.note.reduce((a, b) => a + b, 0);
            return sum / this.note.length;
        }
    },
    {
        name: "Tom",
        age: 8,
        note: [20, 25, 30],
        average: function () {
            let sum = this.note.reduce((a, b) => a + b, 0);
            return sum / this.note.length;
        }
    }
];

function high_score(minscore) {
    console.log(`Students who got more than ${minscore}:`);
    let available = false;

    for (let student of students1) {
        let avg = student.average();
        if (avg > minscore) {
            console.log(`Name: ${student.name}, Age: ${student.age}, Average: ${avg.toFixed(1)}`);
            available = true;
        }
    }

    if (!available) {
        console.log("There is no student who got higher than the given score.");
    }
}

high_score(25);
//

function listing() {
    for (let student of students1) {
        let avg = student.average();
        console.log(`Name: ${student.name}, Age: ${student.age}, Average: ${avg.toFixed(1)}`);
    }
}

listing();
//
let vehicle1 = ["Skoda", "focus", 40, true];
let vehicle2 = ["Renault", "Megane", 50, false];
let vehicle3 = ["Hyundai", "Diamond", 80, false];
let vehiclelist = [vehicle1, vehicle2, vehicle3];
function extra(vehicle) {
    vehiclelist.push(vehicle);
    console.log("the new vehicle is in the list")
}
extra(["Mercy", "Sun", 40, false])
//
function show_list(){
    for (let vehicle of vehiclelist){
       console.log(`trademark: ${vehicle[0]}, subfeature: ${vehicle[1]}, price: ${vehicle[2]},rented: ${vehicle[3] ? "yes" : "no"}`);

    }
}
show_list()
//
function renting(){
    for (let vehicle of vehiclelist)
     if(!vehicle[3]){
        console.log(`${vehicle[0]} ${vehicle[1]} is  available to rent`)

    }
}
renting()
//
function renting(trademark,subfeature){
    for(let vehicle of vehiclelist)
        if(vehicle[0]==trademark&& vehicle[1]==subfeature){
            if(!vehicle[3]){
                console.log(`renting of ${trademark} is successful`)
            }
            else{console.log("it is impossible to rent")}
        }
        return
    console.log("the vehicle you want to rent is not in our list.")
}
renting("Hyundai", "Diamond")