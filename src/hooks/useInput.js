import { useState } from "react";

export default (initVal) => {
  const [state, setState] = useState(initVal);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return [state, handleChange];
};
