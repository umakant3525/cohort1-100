import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  });

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({ returns: 100 });
    }, 1000);
  });

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;
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
      <h3>Income tax : {incomeTax}</h3>
    </>
  );
}

export default App;
