import { useRef, useState } from "react";
function RenderCount(){
    const [count, setCount]=useState(0);
    const renderCount=useRef(0);
    renderCount.current+=1;
    return(
        <div className="space-y-4 p-6">
            <h2>Count: {count}</h2>
            <p>Render Count: {renderCount.current}</p>
            <button onClick={()=>setCount((prev)=>prev+1)}>Increase Count</button>
        </div>
    )
}
export default RenderCount;