import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App(){
  return (
    <div className='container'>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}


function Menu(){
  const pizzas = pizzaData;
  const numPizza = pizzas.length

  return (
    <main className='menu'>
      <ul>
        {
          pizzas.map((pizza)=>(
            <Pizza pizzaObj = {pizza}/>
          ))
        }
      </ul>
    </main>
  )
}

function Pizza(props) {
  return (
    <li>
      <h1>{props.pizzaObj.name}</h1>
      <p>{props.pizzaObj.ingredients}</p>
      <p>{props.pizzaObj.price}</p>
      <p>{props.pizzaObj.soldOut}</p>
      <img src={props.pizzaObj.photoName}></img>
    </li>
  );
}



//Part 2
function Footer (){
  const hour = new Date().getHours()
  const openhour = 12;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen)

  function Order({closehour,openhour}){
    return (
      <div className='order'>
        <p>
          We are from {openhour}:00 to {closehour}:00 Come visit us or order online.
        </p>
      </div>
    )
  }
  return (
    <footer className='footer'>
      {
        isOpen ?(
          <Order closehour={closehour} openhour={openhour}></Order>
        ) : (
          <p>We are happy to welcome you between our open hr {openhour}:00 and {closehour}:00</p>
        )
      }
    </footer>
  )
}



function Header() {
  let style = {}
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co</h1>
    </header>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);

