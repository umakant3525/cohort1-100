import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []); // Empty dependency array to run only once after the initial render

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({ returns: 100 });
    }, 1000);
  }, []); // Empty dependency array to run only once after the initial render


    const incomeTax = (bankData.income + exchangeData.returns ) * 0.3;
  return (
    <div>
      <h3>Income tax: {incomeTax}</h3>
    </div>
  );
}

export default UseEffect;
