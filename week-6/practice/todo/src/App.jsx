import React from 'react'
import { useState } from 'react'
let counter  = 4;

const App = () => {

  const [todos,setTodos] = useState([
    {
    id:1,
    title : "title1",
    description : "description1"
  },
  {
    id:2,
    title : "title2",
    description : "description2"
  },
  {
    id:3,
    title : "title3",
    description : "description3"
  }
]);

function addTodo(){

  setTodos([...todos,{
    id: counter++ ,
    title : "title4",
    description : "description4"
  }])
}

  return (<>
  <button onClick={addTodo}>add TODO</button>
    <div>{todos.map(function(elem){
      return <Todo key={elem.id} title={elem.title} description={elem.description} />
    })}</div>
    </>
  )

  function Todo({title,description}){
    return <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  }
}

export default App