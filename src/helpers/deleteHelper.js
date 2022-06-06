import axios from "axios";

const deleteHelper = async (option, targetId) => {
  switch (option) {
    case "note":
      try {
        const res = await axios.delete(
          `http://localhost:3001/notes/${targetId}`
        );
        console.log(res);
      } catch (e) {
        console.log(`There was an error: ${e}`);
      }
      break;
    case "game":
      try {
        const res = await axios.delete(
          `http://localhost:3001/games/${targetId}`
        );
        console.log(res);
      } catch (e) {
        console.log(`There was an error: ${e}`);
      }
      break;
    default:
      console.log("invalid option");
  }
};

//this is practicaly a context function lol
//also not a hook so I should move it out

export default deleteHelper;
