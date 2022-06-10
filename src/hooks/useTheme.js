import { useState } from "react";

const useTheme = (initVal = "dark") => {
  const [state, setState] = useState(initVal);

  const toggle = () => {
    switch (state) {
      case "dark":
        setState("light");
        break;
      case "light":
        setState("dark");
        break;
      default:
        console.log("lol there's no reason for a default here");
    }
  };
  return [state, toggle];
};

export default useTheme;
