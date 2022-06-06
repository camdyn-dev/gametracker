import { useState } from "react";

const useToggle = (initVal = false) => {
  //I don't think I'll ever want something to be true by default, but why not add a default val ig
  const [state, setState] = useState(initVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

export default useToggle;
