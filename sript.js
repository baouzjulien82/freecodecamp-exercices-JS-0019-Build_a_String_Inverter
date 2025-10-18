const string = "hello"
const reverseString = (string) => {
  return string.split("").reverse().join("");
};

console.log(reverseString(string));
