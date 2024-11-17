import React from "react";

const Header = ({ completedTasks, totalTasks }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-indigo-700">Task Tracker</h1>
      <p className="mt-2 text-lg text-gray-600">
        {completedTasks} of {totalTasks} tasks completed
      </p>
    </div>
  );
};

export default Header;
