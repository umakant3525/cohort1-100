import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    console.log("Memo get called");
    let finalcount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalcount = finalcount + i;
    }
    return finalcount;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Find sum from 1 to n"
      />
      <br />
      <h1>Sum from 1 to {inputValue} is {count}</h1>
      <br />
      <button onClick={() => { setCounter(counter + 1); }}>
        Counter ({counter})
      </button>
    </div>
  );
};

export default UseMemo;
