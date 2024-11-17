import React from "react";

const SearchTask = ({ setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={handleSearchChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};

export default SearchTask;
