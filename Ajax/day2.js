// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("user id")
//             setTimeout(function(){
//                 console.log("user info")
//             },1000)
//         }),2000
//     },3000)
// }
// getInfo()

//Program 2

function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function userId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user id")
        },2000)
    })
}

function userInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user Info")
        },1000)
    })
}

// userCreated()
// .then(function(str){
//     console.log(str)
//     return userId()
// })
// .then(function(str){
//     console.log(str)
//     return userInfo()
// })
// .then(function(str){
//     console.log(str)
// })


//async await 

async function getInfoUser(){
    let q1 = await userCreated()
    console.log(q1)
    let q2 = await userId()
    console.log(q2)
    let q3 = await userInfo()
    console.log(q3)
}
getInfoUser()


