import { useState } from "react";
import "./App.css";

function AddItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAddItem(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add something 💕"
      />
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddItemForm;
