import React, { useState } from "react";

export default function ColorForm({ onAddColor }) {
  let [inputValue, setInputValue] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault()
    onAddColor(inputValue)
    setInputValue('')
  }

  return (
    <div className="colorForm">
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
