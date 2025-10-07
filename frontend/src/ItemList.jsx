import "./App.css";

function ItemList({ items }) {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index} className="item">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
