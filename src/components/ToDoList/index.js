import React, { useState } from "react";

import "./index.css";

const ToDoList = () => {
  const [list, setList] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setList([
        ...list,
        {
          description: event.target.value,
          isDone: false,
          _id: new Date().valueOf(),
        },
      ]);
      event.target.value = "";
    }
  };

  const handleClickIsDone = (taskToChange) => {
    const listModified = list.map((task) =>
      taskToChange._id === task._id ? { ...task, isDone: !task.isDone } : task
    );
    setList(listModified);
  };

  const handleClickRemove = (taskToRemove) => {
    const listModified = list.filter((task) => taskToRemove._id !== task._id);
    setList(listModified);
  };

  const List = () => (
    <ul className="list">
      {list.map((task) => (
        <li className="to-do" key={task._id}>
          <p
            style={{
              textDecorationLine: task.isDone ? "line-through" : null,
            }}
          >
            {task.description}
          </p>
          <div className="clickable">
            <input
              type="radio"
              onChange={() => handleClickIsDone(task)}
              checked={task.isDone}
            />
            <b onClick={() => handleClickRemove(task)}>X</b>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container">
      <input
        placeholder="Add TO DO"
        className="to-do-input"
        onKeyDown={handleKeyDown}
      />
      <List list={list} />
    </div>
  );
};

export default ToDoList;
