export function getHouseChoice(choicesObject) {
  const options = Object.keys(choicesObject);
  const randomIndex = Math.floor(Math.random() * options.length);

  return options[randomIndex];
}
