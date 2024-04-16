import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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


      


    
    </>
  )
}

export default App
