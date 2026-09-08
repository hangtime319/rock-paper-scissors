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
    position: "bottom-0 right-10 md:right-42",
  },
  paper: {
    beats: ["rock", "spock"],
    icon: PaperIcon,
    borderColor: "border-blue-600",
    position: "top-17 right-3 md:right-28 md:top-30",
  },
  scissors: {
    beats: ["paper", "lizard"],
    icon: ScissorsIcon,
    borderColor: "border-amber-500",
    position: "top-0 right-30 md:right-74 ",
  },
  lizard: {
    beats: ["paper", "spock"],
    icon: LizardIcon,
    borderColor: "border-purple-500",
    position: "bottom-0 left-10 md:left-44",
  },
  spock: {
    beats: ["scissors", "rock"],
    icon: SpockIcon,
    borderColor: "border-teal-400",
    position: "top-17 left-3 md:left-28 md:top-30",
  },
};
