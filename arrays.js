let myArray = [];
myArray.push("apple", "banana", "cherry");
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);
myArray.unshift("mango");
console.log(myArray);
myArray.pop();
console.log(myArray);
const numbers = [5, 10, 15, 20, 25];
console.log(myArray.splice(2, 1));
function star(arr) {
  return arr.length;
}
console.log(star(numbers));
