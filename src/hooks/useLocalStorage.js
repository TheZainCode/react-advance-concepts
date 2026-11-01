import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item !== null
        ? JSON.parse(item)
        : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

  const setValue=(value)=>{
    setStoredValue((currentValue)=>{
      try{
      const valueToStore=
      value instanceof Function ?
      value(currentValue) : value;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      return valueToStore;
      }catch(err){
        console.error("Error updating localStorage:", err);
        return currentValue;
      }
    })
  }

  return [storedValue, setValue];
}

export default useLocalStorage;