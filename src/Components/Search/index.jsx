import React from "react";
import "./index.css";

const Search = () => {
  return (
    <form>
      <div className="search-container">
        <img src="/assets/icons/search-normal.png" alt="serach-icon" />
        <input type="text" placeholder="Search" />
      </div>
    </form>
  );
};
export default Search;
