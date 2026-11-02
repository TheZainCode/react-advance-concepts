import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-3">
      <p>Count: {count}</p>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Increase
      </button>
    </div>
  );
}

function StateResetDemo() {
  const [show, setShow] = useState(true);

  return (
    <div className="space-y-4 p-6">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="rounded bg-gray-800 px-4 py-2 text-white"
      >
        Toggle Counter
      </button>

      {show && <Counter />}
    </div>
  );
}

export default StateResetDemo;