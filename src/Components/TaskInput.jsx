import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle, priority);
      setTaskTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task title"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="mt-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
      >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>
      <button
        type="submit"
        className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
