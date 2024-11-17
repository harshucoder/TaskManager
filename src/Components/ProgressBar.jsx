import React from "react";

const ProgressBar = ({ completedTasks, totalTasks }) => {
  const percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="mt-4">
      <div className="w-full bg-gray-200 rounded-lg h-2">
        <div
          className="bg-green-500 h-2 rounded-lg"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-2 text-center text-gray-600">
        {completedTasks} of {totalTasks} tasks completed
      </p>
    </div>
  );
};

export default ProgressBar;
