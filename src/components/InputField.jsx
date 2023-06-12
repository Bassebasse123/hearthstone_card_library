import React from "react";

const InputField = ({ inputSearch, setInputSearch }) => {
  const updateInput = (e) => {
    setInputSearch(e.target.value);
  };
  return (
    <div className="buttonBorder1">
      <div className="buttonBorder2">
        <input
          value={inputSearch}
          onChange={updateInput}
          className="searchbar"
          type="text"
          placeholder="Search name or description"
        />
      </div>
    </div>
  );
};

export default InputField;
