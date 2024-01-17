import React, { useState, useEffect } from 'react';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/todos");
  //       const data = await response.json();
  //       setTodos(data.todos);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures the effect runs only once after the initial render

  
  // this is bad way to send a request to backend 
  //by  this the data request send agai and agaihere we use useEffect hook 
  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos)
  })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
};

export default App;



