import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="mt-6 w-full max-w-xl">
      {tasks.length === 0 ? (
        <p className="text-center text-white text-lg">No tasks added yet!</p>
      ) : (
        <ul>
          <AnimatePresence>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
              />
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default TaskList;
