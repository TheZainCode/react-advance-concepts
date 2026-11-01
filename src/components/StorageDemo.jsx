import useLocalStorage from "../hooks/useLocalStorage";

function StorageDemo() {
  const [name, setName] = useLocalStorage("username", "");
  const [count, setCount]=useLocalStorage("count",0);

  return (
    <div className="space-y-4 p-6">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border p-2 rounded"
      />

      <p>Stored Name: {name}</p>

      <button
        onClick={() => setName("")}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Clear Name
      </button>
      <p>Count: {count}</p>
      <button onClick={()=> setCount((prev)=>prev+1)}>Increase Count</button>
      <button onClick={()=>setCount((prev)=>prev+1)}>Again Increase</button>
    </div>
  );
}

export default StorageDemo;