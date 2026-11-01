import { useState } from "react";

function IndexKeyDemo() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ]);

  const removeFirst = () => {
    setItems((prev) => prev.slice(1));
  };

  return (
    <div className="space-y-4 p-6">
      <button onClick={removeFirst}>
        Remove First Item
      </button>

      {items.map((item, index) => (
        <p key={index}>
          {item.name}
        </p>
      ))}
    </div>
  );
}

export default IndexKeyDemo;