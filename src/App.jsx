import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";
import SearchTask from "./components/SearchTask";
import SortTask from "./components/SortTask";
import { motion } from "framer-motion";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("priority");

  // Load tasks, search term, and sort option from local storage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const savedSearchTerm = localStorage.getItem("searchTerm");
    const savedSortOption = localStorage.getItem("sortOption");

    // Parse the saved tasks, if they exist, and set them in state
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

    // Set the saved search term and sort option if they exist
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }

    if (savedSortOption) {
      setSortOption(savedSortOption);
    }
  }, []);

  // Save tasks, search term, and sort option to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to local storage
    localStorage.setItem("searchTerm", searchTerm); // Save search term to local storage
    localStorage.setItem("sortOption", sortOption); // Save sort option to local storage
  }, [tasks, searchTerm, sortOption]);

  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  // Filtering tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting tasks based on selected option
  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOption === "priority") {
      return a.priority.localeCompare(b.priority);
    } else if (sortOption === "completion") {
      return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 to-indigo-600 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <Header completedTasks={completedTasks} totalTasks={totalTasks} />
        <TaskInput addTask={addTask} />
        {/* Search and Sort Task Components */}
        <SearchTask setSearchTerm={setSearchTerm} />
        <SortTask setSortOption={setSortOption} />
        {totalTasks > 0 && <ProgressBar completedTasks={completedTasks} totalTasks={totalTasks} />}
        <TaskList
          tasks={sortedTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
