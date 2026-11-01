import { useMemo, useState } from "react";

function MemoDemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(100);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += num;
    }

    return result;
  };

  const calculatedValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div className="space-y-4 p-6">
      <h2>Count: {count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>

      <h2>Number: {number}</h2>

      <button onClick={() => setNumber((prev) => prev + 1)}>
        Increase Number
      </button>

      <p>Calculated Value: {calculatedValue}</p>
    </div>
  );
}

export default MemoDemo;