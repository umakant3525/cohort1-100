import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "description of 7-9 ",
      completed: false
    },
    {
      title: "Studying dsa",
      description: "description of 9-11 ",
      completed: false
    },
    {
      title: "Studying react",
      description: "description of 11-2 ",
      completed: true
    }
  ]);


  function addTodo(){
    setTodos([...todos,
    {
        title : "new to do ",
        description : "description of new todos"
    }])
  }
  return (
    <>
      <button onClick={addTodo}>Add to do </button>
      {todos.map(function (todo, index) {
        return <TodoComp key={index} title={todo.title} description={todo.description} />;
      })}
    </>
  );
}

function TodoComp(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h4>{props.description}</h4>
    </>
  );
}

export default Todo;
