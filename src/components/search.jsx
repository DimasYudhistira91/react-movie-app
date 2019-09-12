import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name='query'
        className="form-control my-3"
        placeholder="Searh..."
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
}
 
export default Search;