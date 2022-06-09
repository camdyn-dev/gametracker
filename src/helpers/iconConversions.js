//converts the various measurements to icons so it look pwetty
import CancelIcon from "@mui/icons-material/Cancel";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import FilterNoneIcon from "@mui/icons-material/FilterNone";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RecommendIcon from "@mui/icons-material/Recommend";

import {
  convertStatus,
  convertPriority,
  convertRating,
} from "./conversionTable";

export const ratingConversion = {
  4: {
    value: <RecommendIcon style={{ color: "gold" }} />,
    titleText: convertRating[4], //just gonna pass these into the function at the end so I don't have to keep rewriting it
  },
  3: {
    value: <ThumbUpIcon style={{ color: "green" }} />,
    titleText: convertRating[3],
  },
  2: {
    value: <ThumbsUpDownIcon style={{ color: "orange" }} />,
    titleText: convertRating[2],
  },
  1: {
    value: <ThumbDownIcon style={{ color: "red" }} />,
    titleText: convertRating[1],
  },
  0: {
    value: <DoubleArrowIcon style={{ color: "black" }} />,
    titleText: convertRating[0],
  },
};

export const starConversion = {
  3: {
    value: <StarIcon style={{ color: "gold" }} />,
    titleText: `Completion status: ${convertStatus[3]}!`,
  },
  2: {
    value: <StarHalfIcon style={{ color: "gold" }} />,
    titleText: `Completion status: ${convertStatus[2]}...`,
  },
  1: {
    value: <StarOutlineIcon style={{ color: "gold" }} />,
    titleText: `Completion status: ${convertStatus[1]}`,
  },
  0: {
    value: <CancelIcon style={{ color: "red" }} />,
    titleText: `Completion status: ${convertStatus[0]}`,
  },
}; //using this doesn't work currently, kind of annoying

export const priorityConversion = {
  0: {
    value: <FilterNoneIcon style={{ color: "#a9a9a9" }} />,
    titleText: `Priority: ${convertPriority[0]}`,
  },
  1: {
    value: <Filter1Icon style={{ color: "#69B34C" }} />,
    titleText: `Priority: ${convertPriority[1]}`,
  },
  2: {
    value: <Filter2Icon style={{ color: "#ACB334" }} />,
    titleText: `Priority: ${convertPriority[2]}`,
  },
  3: {
    value: <Filter3Icon style={{ color: "#FAB733" }} />,
    titleText: `Priority: ${convertPriority[3]}`,
  },
  4: {
    value: <Filter4Icon style={{ color: "#FF4E11" }} />,
    titleText: `Priority: ${convertPriority[4]}`,
  },
  5: {
    value: <Filter5Icon style={{ color: "#FF0D0D" }} />,
    titleText: `Priority: ${convertPriority[5]}`,
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
  ratingIcons: function (val) {
    return {
      ratingIcon: ratingConversion[val].value,
      ratingTitle: `Rating: ${ratingConversion[val].titleText}`,
    };
  },
};

export default icons;
