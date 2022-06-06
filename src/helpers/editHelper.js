import axios from "axios";

const editHelper = async (option, targetId, newItems) => {
  switch (option) {
    case "note":
      try {
        const res = await axios.put(`http://localhost:3001/notes/${targetId}`, {
          newItems,
        });
        console.log(res);
      } catch (e) {
        console.log(`ERROR: ${e}`);
      }
    default:
      console.log("invalid option");
  }
};

export default editHelper;
