import { useState } from "react";
function Counter(){
    const [count, setCount]=useState(0);
    return(
        <div className="space-y-4 p-6">
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount((prev)=>prev+1)} className="rounded bg-blue-600 text-white px-4 py-2">Increase</button>
        </div>
    );
};
function StateRestDemo(){
    const [user, setUser]=useState("Zain");
    return(
        <div className="space-y-4 p-6">
            <h1 className="text-blue-900 text-6xl font-extrabold">User Name: {user}</h1>
            <button onClick={()=>setUser((prev)=>prev==="Zain" ? "Ali" : "Zain")} className="rounded bg-gray-800 text-white px-4 py-2">Switch User</button>
            <Counter key={user} />
        </div>
    )
}
export default StateRestDemo;