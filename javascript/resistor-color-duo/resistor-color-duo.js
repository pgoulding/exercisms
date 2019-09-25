//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (colors) => {
  const colorCodes = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  const resistorVal = colorCodes.indexOf(colors[0]).toString() + colorCodes.indexOf(colors[1]).toString()
  return parseInt(resistorVal)
};
