import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const handleSearch = (event) => {
    event.preventDefault();
    // TODO: Implement search logic
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
