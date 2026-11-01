import { useState } from "react";
function KeyDemo(){
    const [items, setItems]=useState([
        {id: 1, name: "Banana"},
        {id: 2, name: "Mango"},
        {id: 3, name: "Apple"},
        {id: 4, name:"Pine Apple"},
        {id: 5, name: "Grapes"},
    ]);
    const addItem=()=>{
        setItems((prev)=>[
            {id: Date.now(), name: "Orange"},
            ...prev,
        ]);
        };
        return(
            <div className="space-y-4 p-6">
                <button onClick={addItem}>Add Item</button>
                {items.map((item)=>(
                    <article key={item.id}>
                        <p>{item.name}</p>
                    </article>
                ))}
            </div>
        )
}
export default KeyDemo;