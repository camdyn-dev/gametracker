import { useState } from "react";

const useInput = (initVal) => {
  const [state, setState] = useState(initVal);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const reset = () => {
    setState("");
  };

  return [state, handleChange, reset];
  //should add a reset function and change the setState export to it
};

export default useInput;
