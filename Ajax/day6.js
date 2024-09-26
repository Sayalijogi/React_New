//Using Fetch 
//Get

function getUser(id) {
    fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data)
    })
}
// getUser(1)

//Post

function createUser() {
    fetch(`https://reqres.in/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'John Doe',
            job: 'Software Developer'
        })
    })
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function(error){
            console.error(error)
        })
}
// createUser()

//Put 

function updateUser(id) {
    fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "morpheus",
            job: "zion resident"
        })
    })
    .then(function(response){
        return response.json()
      
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.error(error)
    })
}
//updateUser(3)

//Delete

function deleteUser(id){
    fetch(`https://reqres.in/api/users/$[id]`,{
        method:"DELETE"
    })
    .then(function(response){
        // console.log(response)
        if(response.status == 204){
            console.log("user deleted successfully")
        }
    })
}
// deleteUser(2)

//Program 1
//By Async 

async function getUser(id){
    try{
        let response = await fetch(`https://reqres.in/api/users/${id}`)
        let res = await response.json()
        console.log(res.data)
    }
    catch(error){
        console.error(error)
    }
}
// getUser(3)

//Program 2

async function CreateUser(){
    try{
        let response = await fetch(`https://reqres.in/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'John Doe',
                job: 'Software Developer'
            })
        })
        let responseB = await response.json()
        console.log(responseB)
    }
    catch(error){
        console.error(error)
    }
}
//CreateUser()

//Program 3

async function UpdateUser(id){
    try{
        let response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'John Doe',
                job: 'Software Developer'
            })
        })
        let responseB = await response.json()
        console.log(responseB)
    }
    catch(error){
        console.error(error)
    }
}
//UpdateUser(7)

//Program 4

async function deleteUser(id){
    try {
        fetch(`https://reqres.in/api/users/$[id]`,{
            method:"DELETE"
        }) 
        .then(function(response){
            // console.log(response)
            if(response.status == 204){
                console.log("user deleted successfully")
            }
        }) 
    }
    catch(error){
        console.error(error)
    }
}
//deleteUser(7)
