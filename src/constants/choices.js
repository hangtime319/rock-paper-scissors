import RockIcon from "../assets/icons/rock.svg";
import PaperIcon from "../assets/icons/paper.svg";
import ScissorsIcon from "../assets/icons/scissors.svg";

export const choices = {
  rock: {
    beats: "scissors",
    icon: RockIcon,
    borderColor: "border-red-600",
    position: "bottom-4 left-30 md:left-74 md:bottom-10",
  },
  paper: {
    beats: "rock",
    icon: PaperIcon,
    borderColor: "border-blue-600",
    position: "left-4 top-4 md:left-38",
  },
  scissors: {
    beats: "paper",
    icon: ScissorsIcon,
    borderColor: "border-amber-500",
    position: "right-4 top-4 md:right-38 md:top-4",
  },
};

