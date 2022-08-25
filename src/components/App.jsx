import React, { useState } from "react";
import Item from "./Items";
// import items from "../Items";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  function handleClick() {
    setItems((prevItem) => [...prevItem, inputItem]);
    setInputItem("");
  }
  function handleInput(event) {
    setInputItem(event.target.value);
  }
  function deleteItem(id) {
    setItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={inputItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {items.map((todoitem, index) => (
            <Item key={index} id={index} item={todoitem} deltfn={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
