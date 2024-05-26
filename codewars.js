                // EXERCISE 1
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''), 20);
  }
  
  console.log(descendingOrder(73625148));


                //EXERCISE 2
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
  return parseInt(String(n).split('').sort((a, b) => b - a).join(''), 10);
}

console.log(descendingOrder(42145)); 
console.log(descendingOrder(145263)); 
console.log(descendingOrder(123456789)); 



                //EXERCISE 3
//We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

function numberToString(num) {
    return num.toString();
  }

  //EXERCISE 4
  //Create a function that returns the sum of a and b an turn it to string.

  function sumString(a,b){
    if(a === ""){
      a = 0;
    } 
    if(b === ""){
      b = 0;
    }
    let numbers = parseInt(a) + parseInt(b);
    return numbers.toString();
  }
  console.log(sumString("2","4"));

  // Exercise 5
  //Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

  function removeEveryOther(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr[i]);
    }
    return result;
  }
  
  // Example usage:
  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])); // Output: ["Keep", "Keep", "Keep"]
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7])); // Output: [1, 3, 5, 7]