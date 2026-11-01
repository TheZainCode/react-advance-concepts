import { memo, useState } from "react";

const Child = memo(function Child({ onAction }) {
  console.log("Child rendered");

  return (
    <button onClick={onAction}>
      Child Action
    </button>
  );
});

function RenderDemo() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  const handleAction = () => {
    console.log("Child action executed");
  };

  return (
    <div className="space-y-4 p-6">
      <h2>Count: {count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase
      </button>

      <Child onAction={handleAction} />
    </div>
  );
}

export default RenderDemo;