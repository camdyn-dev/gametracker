import { useState } from "react";

const useInput = (initVal) => {
  const [state, setState] = useState(initVal);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return [state, handleChange];
};

export default useInput;
