function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search users..."
      value={searchTerm}
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default SearchBar;