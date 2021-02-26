import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="routes-list">
      <Link to="/calculator">Calculator</Link>
      <Link to="/to-do">To Do List</Link>
    </div>
  );
};

export default Home;
