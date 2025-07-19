import React from "react";
import "../App.css";

const Input = ({ value, onChange, onKeyDown, disabled }) => {
  return (
    <div className="inputLetter">
      <input
        className="letter"
        type="text"
        placeholder="ENTER A LETTER"
        maxLength={1}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        autoFocus
      />
    </div>
  );
};

export default Input;



