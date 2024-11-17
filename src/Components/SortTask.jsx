import React from "react";

const SortTask = ({ setSortOption }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="mt-4">
      <select
        onChange={handleSortChange}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
      >
        <option value="priority">Sort by Priority</option>
        <option value="completion">Sort by Completion</option>
      </select>
    </div>
  );
};

export default SortTask;
