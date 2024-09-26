//ternary operator

let a = 5
let b = 10

if(a>b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

a > b ? console.log("a is greater"):console.log("b is greater")

//Program 2
let season = "rainy"
console.log(`The city i am currently is ${season == "rainy"?"nagpur":"pune"}`)

//Program 3
//Functiion Declaration

function additionA(x,y){
    return x + y
}
additionA(10,3)

//function expression
let additionB = function(x,y){
    return x + y
}

//arrow function
let additonC = (x,y) => {
    return x + y
}
let additionD = (x,y) => x + y

//Map with arrow function

let numbers = [11,22,33,44,55,66,77]
console.log(numbers.map(el=>el+10))

//this keyword

var firstName = "ashu"
var lastName = "umak"

// let info = {
//     firstName:"sayali",
//     lastName:"jogi",
//     displayName:function(){
//         //this => info
//         console.log(this.firstName + this.lastName)
//         let displayName2 = function(){
//             //this ==>window
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }
// info.displayName()

// let info = {
//     firstName:"sayali",
//     lastName:"jogi",
//     displayName:function(){
//         //this ==>info
//         console.log(this.firstName + this.lastName)
//         let displayName2 = ()=>{
//             //this => info
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }
// info.displayName()

//this => window

let info3 = {
    firstName:"sayali",
    lastName:"jogi",
    displayName:()=>{
        //this ==> window
        console.log(this.firstName + this.lastName)
        let displayName2 = ()=>{
            //this --->window
            console.log(this.firstName + this.lastName)
        }
        displayName2()
    }
}
info3.displayName()

