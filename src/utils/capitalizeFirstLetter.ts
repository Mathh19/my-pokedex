export function capitalizeFirstLetter(name: string) {
  const firstLetter = name.charAt(0).toLocaleUpperCase();
  const remainingLetters = name.slice(1);
  const concatStrings = firstLetter + remainingLetters;

  return concatStrings;
}
