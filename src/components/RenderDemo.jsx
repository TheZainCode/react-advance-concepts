import { Profiler, memo, useCallback, useState } from "react";

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

  const handleAction = useCallback(() => {
    console.log("Child action executed");
  }, []);

  const handleRender = (
    id,
    phase,
    actualDuration,
    baseDuration
  ) => {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
    });
  };

  return (
    <Profiler id="RenderDemo" onRender={handleRender}>
      <div className="space-y-4 p-6">
        <h2>Count: {count}</h2>

        <button onClick={() => setCount((prev) => prev + 1)}>
          Increase
        </button>

        <Child onAction={handleAction} />
      </div>
    </Profiler>
  );
}

export default RenderDemo;