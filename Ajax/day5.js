function getUserPageWise(page){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        console.log(response)
        return response.data[0].id
    })
}

function getUserById(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res.data)
        return res.data
    })
}
// getUserById(7)

function renderHtml(el){
    document.write(`<h1>${el.id}<h1>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<p>${el.first_name}${el.last_name}</p>`)
    document.write(`<img src = ${el.avatar}>`)
}

//consuming the promises 
// getUserPageWise(1)
// .then(function(id){
//     return getUserById(id)
// })
// .then(function(user){
//     renderHtml(user)
// })

async function renderUser(page){
    let id =  await getUserPageWise(page)
    let user = await getUserById(id)
     renderHtml(user)
 }
 renderUser(2)

