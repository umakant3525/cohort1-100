import React from "react";

const Header = (props) => {
  return (
    //concept of reconsillation 
    //use can use rect fragment 
    // rerender is important concept for react as well as react native 
    <>
      <div>{props.title}</div>
    </>
  );
};

// const Header = ({ title }) => {
//     return (
//       <>
//         <div>{title}</div>
//       </>
//     );
//   };

export default Header;
