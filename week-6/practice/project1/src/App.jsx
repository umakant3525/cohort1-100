import React, { useState } from 'react';
import Header from './Componant/Header';
import Rerender from './Componant/Rerender';

const initialTitles = ["header3", "header4", "header5"];

const App = () => {
  const [titles, setTitles] = useState(initialTitles);

  // Additional logic or functions can be added here

  return (
    <div>
      <Header title="header1" />
      <Header title="header2" />
      {titles.map((title, index) => (
        <Header key={index} title={title} />
      ))}
      <Rerender />
    </div>
  );
};

export default App;
