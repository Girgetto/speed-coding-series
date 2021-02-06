import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <Link to="/calculator">Calculator</Link>
      <Link to="/to-do">To Do List</Link>
    </div>
  );
};

export default Home;
