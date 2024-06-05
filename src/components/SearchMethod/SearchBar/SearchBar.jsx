/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:5000/grocers/")
      .then((res) => res.json())
      .then((data) => {
        const results = data.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search"
        className="search-input px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-orange-500 bg-transparent w-full sm:w-32 md:w-48 lg:w-64"
      />
    </div>
  );
};

export default SearchBar;
