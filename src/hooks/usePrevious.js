import { useEffect, useRef } from "react";
function usePrevious(value){
    const previousRef=useRef();
    useEffect(()=>{
        previousRef.current=value;
    },[value]);
    return previousRef.current;
}
export default usePrevious;