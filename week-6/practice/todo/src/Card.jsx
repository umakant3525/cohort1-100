import React from 'react';

const Card = () => {
  return (
    <div>
      <CardWrapper innerComponent={TextComponent} />
      <CardWrapper innerComponent={BoxComponent} />
    </div>
  );
};

function TextComponent() {
  return (
    <div>
        <h1> Hello ji card 1</h1>
     <br />
    </div>
  );
}

function BoxComponent() {
  return (
    <div style={{ background: "red", height: "150px", width: "150px" }}>
      BOX
    </div>
  );
}

function CardWrapper({ innerComponent: InnerComponent }) {
  return (
    <>
      <div style={{ border: "2px solid black" }}>
        <InnerComponent />
      </div>
    </>
  );
}

export default Card;
