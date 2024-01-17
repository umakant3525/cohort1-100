import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function counter(){
    setCount( count + 1)
  }

  return (
    <> <button onClick={counter}> count is {count}</button> </>
  )
}

export default App
