import React from "react";
import { motion } from "framer-motion";

const TaskItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <motion.li
      className="flex justify-between items-center mb-4 bg-gray-100 p-4 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-4"
        />
        <span
          className={`${
            task.completed ? "line-through text-gray-500" : "text-gray-800"
          } text-lg`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </motion.li>
  );
};

export default TaskItem;
