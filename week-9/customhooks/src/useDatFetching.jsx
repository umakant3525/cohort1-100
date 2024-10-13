// import { useEffect, useState } from 'react';
// import axios from 'axios';

// // Custom hook for fetching todos
// function useTodos() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     // Fetching todos using Axios
//     axios.get("<https://sum-server.100xdevs.com/todos>")
//       .then(res => {
//         setTodos(res.data.todos);
//       })
//   }, []);

//   // Return the todos state
//   return todos;
// }

// // Main App component
// function App() {
//   // Using the custom hook to fetch todos
//   const todos = useTodos();

//   return (
//     <>
//       {/* Rendering Track component for each todo */}
//       {todos.map(todo => <Track key={todo.id} todo={todo} />)}
//     </>
//   );
// }

// // Track component for rendering individual todo
// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from 'react';
// import axios from 'axios';

// // Custom hook for fetching todos with loading and error indicators
// function useTodos() {
//   const [loading, setLoading] = useState(true);
//   const [todos, setTodos] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetching todos using Axios
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching todos:", err);
//         setError("Failed to load todos.");
//         setLoading(false);
//       });
//   }, []);

//   // Return todos, loading state, and error
//   return { todos, loading, error };
// }

// // Main App component
// function App() {
//   // Using the custom hook to fetch todos
//   const { todos, loading, error } = useTodos();

//   // Rendering loading message if data is still loading
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Rendering error message if fetch failed
//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Rendering a message if no todos are found
//   if (todos.length === 0) {
//     return <div>No todos available.</div>;
//   }

//   // Rendering Track component for each todo
//   return (
//     <>
//       {todos.map(todo => <Track key={todo.id} todo={todo} />)}
//     </>
//   );
// }

// // Track component for rendering individual todo
// function Track({ todo }) {
//   return (
//     <div>
//       <h3>{todo.title}</h3>
//       <p>{todo.description}</p>
//     </div>
//   );
// }

// export default App;



// auto refreshing the data hook 
import { useEffect, useState } from 'react';
import axios from 'axios';

// Custom hook for fetching todos with auto-refresh
function useTodos(n) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  // Function to fetch data from the backend
  function getData() {
    axios.get("<https://sum-server.100xdevs.com/todos>")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    // Initial data fetch
    getData();

    // Set up interval to fetch data every n seconds
    const intervalId = setInterval(() => {
      getData();
    }, n * 1000);

    // Clean up the interval on component unmount or when n changes
    return () => clearInterval(intervalId);
  }, [n]);

  // Return todos and loading state
  return {
    todos: todos,
    loading: loading
  };
}

// Main App component
function App() {
  // Using the custom hook to fetch todos with auto-refresh every 5 seconds
  const { todos, loading } = useTodos(5);

  // Rendering loading message if data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Rendering Track component for each todo
  return (
    <>
      {todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  );
}

// Track component for rendering individual todo
function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
