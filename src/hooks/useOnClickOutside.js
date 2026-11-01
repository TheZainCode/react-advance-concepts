import { useEffect } from "react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const handleClick = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;