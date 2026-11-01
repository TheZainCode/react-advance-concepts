import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

function PreviousValue() {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

  return (
    <div className="space-y-4 p-6">
      <p>Current Count: {count}</p>

      <p>Previous Count: {previousCount ?? "None"}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase
      </button>

      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default PreviousValue;