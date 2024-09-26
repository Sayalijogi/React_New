//Destructure

let movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Science Fiction",
        rating: 8.8
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        genre: "Crime",
        rating: 9.2
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        genre: "Action",
        rating: 9.0
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        genre: "Crime",
        rating: 8.9
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        genre: "Drama",
        rating: 9.3
    }
]

let genres = ["Science Fiction","Crime","Action","Drama"]
let genre1 = genres[0]
let genre2 = genres[1]
let genre3 = genres[2]
console.log(genre1)
console.log(genre2)
console.log(genre3)

let [g11,g22,g33] = genres
console.log(g11)
console.log(g22)
console.log(g33)

//Object Destructure

let firstMovie = movies[0]
// let title = firstMovie.title
// let director = firstMovie.director
// console.log(title)
// console.log(director)

let {title,director,rating,genre,year} = firstMovie
console.log(title)
console.log(director)
console.log(rating)
console.log(genre)
console.log(year)

///////////////////////////////////////////
//spread and rest operator
//array
let genres2 = ["Science Fiction","Crime","Action","Drama"]
genres2.push("Horror")
console.log(genres2)

//spread operator
let q1 = [...genres2,"Horror"]
console.log(genres2)

//rest operator
genres2 = ["science Fiction","Crime","Action","Drama"]
let [g111,g222,...gall] = genres2
console.log(gall)

////////////////////////////Objects///////////////
//objects
//rest operator

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction",
    rating: 8.8
};

let {title:title2, ...restAll} = movie
console.log(title2)
console.log(restAll)

let movie2 = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction",
    rating: 8.8
}
let movie3 = {...movie2,month:"june"}
console.log(movie3)
console.log(movie2)

//template literals
//ternary over if else

