//converts the various measurements to icons so it look pwetty

import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";

export const starConversion = {
  Completed: {
    value: <StarIcon style={{ color: "gold" }} />,
    titleText: "Completion status: Completed!",
  },
  "In Progress": {
    value: <StarHalfIcon style={{ color: "gold" }} />,
    titleText: "Completion status: In progress...",
  },
  "Lightly/Unplayed": {
    value: <StarOutlineIcon style={{ color: "gold" }} />,
    titleText: "Completion status: Lightly/Unplayed",
  },
}; //using this doesn't work currently, kind of annoying

export const priorityConversion = {
  1: {
    value: <Filter1Icon style={{ color: "#69B34C" }} />,
    titleText: "Priority: Dunno",
  },
  2: {
    value: <Filter2Icon style={{ color: "#ACB334" }} />,
    titleText: "Priority: Eventually",
  },
  3: {
    value: <Filter3Icon style={{ color: "#FAB733" }} />,
    titleText: "Priority: Sometime soon",
  },
  4: {
    value: <Filter4Icon style={{ color: "#FF4E11" }} />,
    titleText: "Priority: Very soon",
  },
  5: {
    value: <Filter5Icon style={{ color: "#FF0D0D" }} />,
    titleText: "Priority: NOW",
  },
};

export const ratingConversion = {
  null: {
    value: "",
  },
};

const icons = {
  starIcons: function (val) {
    return {
      statusIcon: starConversion[val].value,
      statusTitle: starConversion[val].titleText,
    };
  },
  priorityIcons: function (val) {
    return {
      priorityIcon: priorityConversion[val].value,
      priorityTitle: priorityConversion[val].titleText,
    };
  },
};

export default icons;
