import React, { useState } from "react";

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

  const List = (list) => (
    <ul>
      {list.map((task) => (
        <li>
          <p
            style={{
              textDecorationLine: task.isDone ? "line-through" : null,
            }}
          >
            {task.description}
          </p>
          <input type="radio" onClick={() => handleClickIsDone(task)} />
          <p onClick={() => handleClickRemove(task)}>X</p>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <input placeholder="Add TO DO" onKeyDown={handleKeyDown} />
      <List list={list} />
    </div>
  );
};

export default ToDoList;
