import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <button onClick={() => setSelectedId(4)}>4</button>
      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState({});

  const getTodos = async () => {
    try {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      console.log(res.data.todo);
      setTodos(res.data.todo);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTodos();
  }, [id]); // here dependencies is id here 
  // here when id changes then the useeffect works 

  return (
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  );
}
