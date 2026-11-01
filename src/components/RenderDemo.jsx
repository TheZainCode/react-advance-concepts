import { useState } from "react";
function Child(){
    console.log("Child Rendered");
    return <p>Child Component</p>
}
function RenderDemo(){
    const [count, setCount]=useState(0);
    console.log("Parent Rendered");
    return(
        <div className="space-y-4 p-6">
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
            <Child />
        </div>
    )
}
export default RenderDemo;