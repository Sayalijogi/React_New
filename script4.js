//truthy and falsy

//NaN

//Program 1

let a ;
console.log(a)  //undefined
console.log(12 + a)  //NaN 

//false ,NaN , null, 0 ,"",7 !== 7
//true , 9 == 9, 8 != '8', 7 == 7, {},[], " ","3"

if({}){
    console.log("Hello")  //true
}
else {
    console.log("bye")  //False
}

// && , || , ! ---> Logical Operators

let a1 = "" && 7
//     false && true
console.log(a1) // ""

let a2 = 8 === 8 && 7
//      true && True
console.log(a2) // 7

let a11 = 0
let b12 = 42
let b13 = null
let b14 = "hello"

console.log(a11 && b12) //false return gives 0
//          false && true 
console.log(b13 && b14) //false return gives null
//          false && true


// || --> OR 

let b15 = null
let b16 = 7 != 7
let f = b15 || b16
//     false || true
console.log(f) //returns false 


b15b = "A"
let f12 = b15b || b16
//       True  || True
console.log(f12) // Gives A returns True

let h1 = false 
let h2 = 10 === '10'
let r = false || h2
//      false || true
console.log(r) //returns false

let j = 9 > 11
let k = undefined
let jk = k || j
//      false || false
console.log(jk) //returns false

//coalese

//where there is null and undefined it will check 2nd option

console.log(null ?? "hello")  //returns true gives hello
            //false ?? true

console.log(0 && 'hello') //returns false gives 0
//         false && true 

console.log(null ?? 'hello') //returns true gives hello
            //false ?? true 

let a111 = 0
if(a111 == null || a111 === undefined){
    //     false ||   false
    console.log("hello")
}
else {
    console.log("bye") //returns false gives bye
}

console.log(7 === 7 && 8 === 8) //both true gives value as true
//            true &&  true 

console.log(6 != 6 && "6") //In AND returns value as false
//          false && true

console.log(6 != 6 || "6") // In OR returns true value gives 6
//           false || true

console.log( 8 == 5 ?? "6") // Gives false
//             false ?? true

console.log( " "?? "6") // Gives false given string gives answer as blank space
//          False ?? True 

console.log( undefined ?? "6") //Gives true value gives 6 as output
//when its undefined or null its jump on next value 

let w111 = null ?? 8 === 8
//when its undefined or null its jump on next value 
console.log(w111) //True

//Optional Operator

let info = {
    firstName:"sayali",
    lastName:"jogi",
    parent:{
        mother:"mamta jogi",
        father:"damodhar jogi"
    }
}

console.log(info?.parent?.mother)


