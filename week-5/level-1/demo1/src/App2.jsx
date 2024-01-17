import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function incCount(){
    setCount( count + 1)
  }
  function decCount(){
    if(count>0){
        setCount(count - 1)
    }
  }

  return (
    <>
     <button onClick={decCount}> - </button> 
     <h1> count is {count}  </h1>
    <button onClick={incCount}> + </button>
    </> 
  )
}

export default App
