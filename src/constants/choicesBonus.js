import RockIcon from "../assets/icons/rock.svg";
import PaperIcon from "../assets/icons/paper.svg";
import ScissorsIcon from "../assets/icons/scissors.svg";
import LizardIcon from "../assets/icons/lizard.svg";
import SpockIcon from "../assets/icons/spock.svg";

export const choicesBonus = {
  rock: {
    beats: ["scissors", "lizard"],
    icon: RockIcon,
    borderColor: "border-red-600",
    position: "bottom-0 right-0 -translate-x-1/3",
  },
  paper: {
    beats: ["rock", "spock"],
    icon: PaperIcon,
    borderColor: "border-blue-600",
    position: "top-0 right-0 translate-y-2/3",
  },
  scissors: {
    beats: ["paper", "lizard"],
    icon: ScissorsIcon,
    borderColor: "border-amber-500",
    position: "top-1/8 right-1/2 translate-x-1/2 -translate-y-1/2",
  },
  lizard: {
    beats: ["paper", "spock"],
    icon: LizardIcon,
    borderColor: "border-purple-500",
    position: "bottom-0 left-0 translate-x-1/3"
  },
  spock: {
    beats: ["scissors", "rock"],
    icon: SpockIcon,
    borderColor: "border-teal-400",
    position: "top-0 left-0 translate-y-2/3",
  },
};
