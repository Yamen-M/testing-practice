export function capitalize(word) {
  const capitalized = word[0].toUpperCase() + word.slice(1);
  return capitalized;
}

export function reverseString(word) {
  let result = "";
  for (let j = word.length - 1; j > -1; j--) {
    result += word[j];
  }
  return result;
}

export const calculator = {
  add: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Arguments must be numbers");
    }
    return a + b;
  },
  subtract: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Arguments must be numbers");
    }
    return a - b;
  },
  divide: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Arguments must be numbers");
    }
    if (b === 0) throw new Error("Invlaid, Trying to divide by 0!");
    return a / b;
  },
  multiply: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Arguments must be numbers");
    }
    return a * b;
  },
};

export function caesarCipher(word, shiftFactor) {
  return word.replace(/[a-z]/gi, (char) => {
    const base = char < "a" ? 65 : 97;
    const code = char.charCodeAt(0) - base;
    const shifted = (code + shiftFactor) % 26;
    return String.fromCharCode(base + (shifted < 0 ? shifted + 26 : shifted));
  });
}

function getSmallest(arr) {
  let smallest = arr[0];
  arr.forEach((element) => {
    if (element < smallest) smallest = element;
  });
  return smallest;
}

function getLargest(arr) {
  let largest = arr[0];
  arr.forEach((element) => {
    if (element > largest) largest = element;
  });
  return largest;
}

export function analyzeArray(arr) {
  return {
    average: arr[arr.length / 2],
    min: getSmallest(arr),
    max: getLargest(arr),
    length: arr.length,
  };
}