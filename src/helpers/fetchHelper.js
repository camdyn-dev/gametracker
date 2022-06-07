import axios from "axios";

const fetchHelper = async (option, targetId, setState) => {
  switch (option) {
    case "game":
      try {
        const res = await axios.get(`http://localhost:3001/${targetId}`);
        setState(res.data[0]);
      } catch (error) {
        console.log(error);
      }
      break;
    case "notes":
      try {
        const res2 = await axios.get(`http://localhost:3001/notes/${targetId}`);
        setState(res2.data);
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      console.log("ERROR: Invalid option");
  }
};

export default fetchHelper;

//This currently doesn't work in the lower notes
