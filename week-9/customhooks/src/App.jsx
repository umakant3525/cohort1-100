// // import { useState } from 'react'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //     </>
// //   )
// // }

// // export default App





// /// this is and class based component 
// // there are many issues and all 

// // import React, { Component } from 'react';

// // class App extends Component {

// //   constructor(props) {
// //     super(props);
// //     // Initialize the state
// //     this.state = {
// //       count: 0,
// //     };
// //   }

// //   // Method to handle button click and update the count
// //   incrementCount = () => {
// //     this.setState((prevState) => ({
// //       count: prevState.count + 1,
// //     }));
// //   };

// //   render() {
// //     return (
// //       <>
// //         <button onClick={this.incrementCount}>
// //           count is {this.state.count}
// //         </button>
// //       </>
// //     );
// //   }
// // }

// // export default App;


// // life cycle mount 


// // import { useEffect } from 'react';

// // function App() {
// //   useEffect(() => {
// //     console.error("component mounted ");
    
// //     // Cleanup function that runs when the component unmounts
// //     return () => {
// //       console.log("component unmounted");
// //     };
// //   }, []); // Empty dependency array ensures this runs only once (on mount and unmount)

// //   return (
// //     <>
// //       <div>
// //         component mounted or not
// //       </div>
// //     </>
// //   );
// // }

// // export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   // This method is called after the component is mounted
//   componentDidMount() {
//     console.error("error occurred");
//   }

//   // This method is called right before the component is unmounted
//   componentWillUnmount() {
//     console.log("component unmounted");
//   }

//   render() {
//     return (
//       <>
//         <div>
//           component mounted or not
//         </div>
//       </>
//     );
//   }
// }

// export default App;


// mouse position 

import React from 'react';
import { useMousePointer } from './useMousePosition';

function App() {
  // Use the custom hook to get the current mouse position
  const mousePointer = useMousePointer();

  // Render a message displaying the current mouse position
  return (
    <>
      Your mouse position is {mousePointer.x} {mousePointer.y}
    </>
  );
}

export default App;