import React, { useState } from "react";

function App(){
    const [items,setItems] = useState([]);
    const [newItemName,setNewItemName] = useState('');
    const [newItemDescription,setNewItemDescription] = useState('');

    const addItem = () => {
        if (newItemName.trim() === " || newItemDescription.trim() ==="){
            alert('Please enter both name and description for the item');
            return;
        }
        const newItem = {
            id:Math.random().toString(36),
            name:newItemName,
            description:newItemDescription
        };
        setItems([...items,newItem]);
        setNewItemName('');
        setNewItemDescription('');
        console.log(newItem);
    };

    const deleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !==id);
        setItems(updatedItems);
        console.log("Deleted Item with ID",id);
    };

    return (
        <div className="App">
            <h1>Item List</h1>
            <div>
                <label>Name:</label>
                <input type="text" id="name" value={newItemName} onChange={(event)=>setNewItemName(event.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <input type="text" id="description" value={newItemDescription} onChange={(event)=>setNewItemDescription(event.target.value)}></input>
            </div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key = {item.id}>
                        <strong>{item.name}</strong>
                        <strong>{item.description}</strong>
                        <button onClick={()=> deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>   
    );
}
export default App;


