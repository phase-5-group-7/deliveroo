import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';



function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;

    try {
      const response = await fetch("https://deliveroo-api.onrender.com/order?q=${query}");
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search..." name="query" />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
