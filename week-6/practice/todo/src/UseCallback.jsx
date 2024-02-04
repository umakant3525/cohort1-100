import React, { useState } from 'react';
import { useCallback } from 'react';
import { memo } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const hiFunction = useCallback(() =>{
    console.log("Hello ji ")
  },[])

  return (
    <div>
      <BtnComponent inputFunction={hiFunction} />
      <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
    </div>
  );
};

const BtnComponent = memo(()=>{
  console.log("child render");

  return <div>
    <button>Button Clicked</button>
  </div>
})

export default UseCallback;
