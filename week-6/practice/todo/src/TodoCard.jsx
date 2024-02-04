import React, { useEffect, useState } from 'react';

const TodoCard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sum-server.100xdevs.com/todos");
        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      {Array.isArray(todos) ? (
        todos.map(function (elem) {
          return <Todo key={elem.id} title={elem.title} description={elem.description} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TodoCard;
