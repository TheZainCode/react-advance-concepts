import { useRef } from "react";
function FocusInput(){
    const inputRef=useRef(null);
    const handleFocus=()=>{
        inputRef.current.focus();
    }
    return(
        <div className="space-y-4 p-6">
            <input type="text" ref={inputRef} placeholder="Enter your name" className="border rounded p-2" />
            <button className="px-4 py-2 rounded text-white bg-blue-600" onClick={handleFocus}>Focus Input</button>
        </div>
    )
}
export default FocusInput;