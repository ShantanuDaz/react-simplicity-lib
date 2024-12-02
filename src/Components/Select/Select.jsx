import { useRef, useState } from "react";
import "./Select.css";
const Select = ({ options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (document.activeElement === inputRef.current) {
      // If the input is focused, blur it
      inputRef.current.blur();
    } else {
      // If the input is not focused, focus it
      inputRef.current.focus();
    }
  };

  // need to stop button becoming the focused element so that handleButtonClick can work
  const preventButtonFocus = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <p>Selected Value: {selectedValue}</p>
      <input
        type="text"
        id="react-simplicity-select-input"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => {
          setIsOpen(false);
          setInputValue("");
        }}
      />
      <button onClick={handleButtonClick} onMouseDown={preventButtonFocus}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && (
        <div>
          {options
            .filter((option) =>
              option.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedValue(option);

                  inputRef.current.blur();
                }}
                onMouseDown={preventButtonFocus}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Select;
