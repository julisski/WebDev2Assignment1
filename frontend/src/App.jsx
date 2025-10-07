import "./App.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import AddItemForm from "./AddItemForm";

function App() {
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  
  const handleAddItem = async (newItem) => {
    const response = await fetch("http://127.0.0.1:8000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newItem }),
    });
    const data = await response.json();
    setItems((prev) => [...prev, data]);
  };

  return (
    <div className="app-container">
      <h1> My Item List </h1>
      <AddItemForm onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
