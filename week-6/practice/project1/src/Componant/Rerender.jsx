import React, { useMemo, useState } from 'react';
import Header from './Header';

const Rerender = () => {
  const [title, setTitle] = useState("My name is umakant");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  const MemoizedHeader = useMemo(() => {
    return <Header title={title} />;
  }, [title]);

  return (
    <div>
      <button onClick={updateTitle}>Update Title</button>
      {MemoizedHeader}
      <Header title="Header3" />
      <Header title="Header4" />
      <Header title="Header5" />
      <Header title="Header6" />
    </div>
  );
};

export default Rerender;
