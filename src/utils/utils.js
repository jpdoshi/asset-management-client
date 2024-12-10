export const capitalizeString = (_str) => {
  return String(_str[0]).toUpperCase() + String(_str).slice(1);
};

export const pascalToString = (_str) => {
  let newStr = "";

  for (let word of _str.split("-")) {
    newStr += capitalizeString(word + " ");
  }

  return newStr.trim();
};
