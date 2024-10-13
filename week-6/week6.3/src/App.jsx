import {  useState } from "react";
import "./App.css";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";

function App() {
  const [count, setCount] = useState(0);
 
  return (
    <>
      {/* Here is your usestate code  */}
      <h1> useState </h1>
      <p>here the concepst of rerendering and reconsillation</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Here is the useEffect logic goes  */}
    <UseEffect/>
      {/* here is usememo logic goes  */}
      <UseMemo/>
    </>
  );
}

export default App;
