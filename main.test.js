import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main";

it("Capitalize the first letter", () => {
  expect(capitalize("test")).toBe("Test");
});

it("Reverse string", () => {
  expect(reverseString("test")).toBe("tset");
});

describe("Calculator:", () => {
  it("adds two numbers correctly", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 5)).toBe(4);
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  it("throws error when adding non-numbers", () => {
    expect(() => calculator.add("1", 2)).toThrow("Arguments must be numbers");
  });

  it("subtracts two numbers correctly", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(0, 5)).toBe(-5);
  });

  it("divides two numbers correctly", () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(1, 3)).toBeCloseTo(0.333, 3);
  });

  it("throws error when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow(
      "Invlaid, Trying to divide by 0!"
    );
  });

  it("multiplies two numbers correctly", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
    expect(calculator.multiply(0.5, 0.5)).toBe(0.25);
  });

  it("handles Infinity correctly", () => {
    expect(calculator.add(Infinity, 1)).toBe(Infinity);
  });
});

describe("CaesarCipher:", () => {
  it("shifts letters correctly with positive shift", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
    expect(caesarCipher("Hello", 5)).toBe("Mjqqt");
  });

  it("wraps from z to a correctly", () => {
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("Z", 5)).toBe("E");
  });

  it("handles negative shifts correctly", () => {
    expect(caesarCipher("bcd", -1)).toBe("abc");
    expect(caesarCipher("Mjqqt", -5)).toBe("Hello");
  });

  it("leaves non-alphabetic characters unchanged", () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
    expect(caesarCipher("123", 10)).toBe("123");
    expect(caesarCipher("@#$", 3)).toBe("@#$");
  });

  it("handles large shifts correctly", () => {
    expect(caesarCipher("abc", 26)).toBe("abc");
    expect(caesarCipher("abc", 27)).toBe("bcd");
    expect(caesarCipher("abc", 53)).toBe("bcd");
  });

  it("handles empty string", () => {
    expect(caesarCipher("", 5)).toBe("");
  });

  it("preserves case", () => {
    expect(caesarCipher("AbC", 1)).toBe("BcD");
    expect(caesarCipher("xYz", 5)).toBe("cDe");
  });
});

describe("Analyze Array", () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(testArray);

  it("calculates the average correctly", () => {
    expect(result.average).toBe(4);
  });

  it("finds the minimum value", () => {
    expect(result.min).toBe(1);
  });

  it("finds the maximum value", () => {
    expect(result.max).toBe(8);
  });

  it("returns the correct length", () => {
    expect(result.length).toBe(6);
  });

  it("returns an object with average, min, max, and length", () => {
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
