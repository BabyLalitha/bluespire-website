// components/Search.js
import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <div>
      <input className={"border-black border-2"}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
