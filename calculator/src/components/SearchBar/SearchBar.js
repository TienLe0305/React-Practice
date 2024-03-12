import React from "react";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    console.log("Tu khoa tim kiem:", keyword);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Nhap tu khoa"
        value={keyword}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
