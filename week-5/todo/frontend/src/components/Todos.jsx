import React from 'react';

const Todos = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
        </div>
      ))}
    </>
  );
};

export default Todos;
