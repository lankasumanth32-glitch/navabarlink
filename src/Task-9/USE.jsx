// mounting

// import { useEffect } from "react";

// function USE() {

//   useEffect(() => {
//     console.log("Component Mounted");
//   }, []);

//   return (
//     <h1>Mounting Example</h1>
//   );
// }

// export default USE;




// Updating Demo

// import { useState, useEffect } from "react";

// function USE() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count Updated");
//   }, [count]);

//   return (
//     <div>
//       <h1>Count : {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }

// export default USE;




// Unmounting


import { useState } from "react";
import Child from "./Child";

function USE() {

  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Show / Hide
      </button>

      {show && <Child />}
    </div>
  );
}

export default USE;