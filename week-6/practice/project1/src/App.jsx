import React, { useState } from 'react';

const App = () => {
  return (
    <div>
      <HeaderwithBtn />
      <Header title="Header2" />
      <Header title="Header2" />
      <Header title="Header3" />
      <Header title="Header4" />
    </div>
  );
};

function Header({ title }) {
  return <div>{title}</div>;
}

function HeaderwithBtn() {
  const [title, setTitle] = useState("My name is umakant");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Click</button>
      <Header title={title} />
    </>
  );
}

export default App;
