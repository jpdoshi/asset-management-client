export const capitalizeString = (_str) => {
  let newStr = "";

  for (let word of _str.split(" ")) {
    newStr += String(word[0]).toUpperCase() + String(word).slice(1) + " ";
  }

  return newStr;
};
