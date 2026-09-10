import RockIcon from "../assets/icons/rock.svg";
import PaperIcon from "../assets/icons/paper.svg";
import ScissorsIcon from "../assets/icons/scissors.svg";

export const choices = {
  rock: {
    beats: "scissors",
    icon: RockIcon,
    borderColor: "border-red-600",
    position: "left-1/2 bottom-0 -translate-x-1/2 -translate-y-2/6 md:-translate-y-1/2",
  },
  paper: {
    beats: "rock",
    icon: PaperIcon,
    borderColor: "border-blue-500",
    position: "right-2/12 top-1/6 translate-x-1/2 -translate-y-1/3 md:translate-x-1/3",
  },
  scissors: {
    beats: "paper",
    icon: ScissorsIcon,
    borderColor: "border-gold-500",
    position: "left-2/12 top-1/6 -translate-x-1/2 -translate-y-1/3 md:-translate-x-1/3",
  },
};

