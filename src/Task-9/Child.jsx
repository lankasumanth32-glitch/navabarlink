import { useEffect } from "react";

function Child() {

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <h1>Child Component</h1>
  );
}

export default Child;