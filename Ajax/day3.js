//Promise Combinators
//Promise.all()
//Promise.any()
//Promise.race()
//Promise.allSettled()

//By Async Await

//Promise.all()   ----> In Promise.any if reject state comes it will not execute and give error in resolve state it will give array of all resolve states

async function PromiseAll(){
    let a = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve("hello2"),
        Promise.resolve("hello3")
    ])
    console.log(a)
}
//PromiseAll()

//Promise.allSettled() --> In Promise.allSettled resolve state will show value and reject state will give reason it will be shown with array of object 

async function PromiseAllSettled(){
    let b = await Promise.allSettled([
        Promise.resolve("Hii"),
        Promise.reject("Hii2"),
        Promise.resolve("Hii3")
    ])
    console.log(b)

}
//PromiseAllSettled()

//Promise.race() --> In Promise.race the one who will execute first will show in output whether it is resolve or reject

function Student(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('StudentOne')
        },3000)
    })
}
function StudentTwo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('StudentTwo')
        },2000)
    })
}

async function getRacePromise(){
    let b =  await Promise.race([
         Student(),
         StudentTwo()
     ])
     console.log(b)
  }
//getRacePromise()

//Promise.any() --> In Promise.any it will execute in first resolve state 

async function getPromiseAny(){
    let c = await Promise.any([
        Promise.reject("Bye"),
        Promise.reject("Bye1"),
        Student(),
        StudentTwo()
    ])
    console.log(c)
}
getPromiseAny()

