import { useRef, useState, useCallback } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOnClickOutside(dropdownRef, closeDropdown);

  return (
    <div className="p-6">
      <div ref={dropdownRef} className="relative inline-block">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Toggle Dropdown
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 border bg-white shadow rounded p-4">
            <p>Dropdown Content</p>
            <p>Click outside to close.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;