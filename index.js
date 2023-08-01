function hasTargetSum(array, target) {
  // Write your algorithm here
  hasTargetSum([3, 8, 12, 4, 11, 7], 10);
  hasTargetSum([22, 19, 4, 6, 30], 25);
  hasTargetSum([1, 2, 5], 4);
}

/* 
  Write the Big O time complexity of your function here
*/
// I expect calling hasTargetSum with an array [numbers] will return [true]
console.log("Expecting: [true]");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7]));

console.log("Expecting: [true]");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30]));

// I expect calling hasTargetSum with an array [numbers] will return [false]

console.log("Expecting: [false]");
console.log("=>", hasTargetSum([1, 2, 5]));

/* 
  Add your pseudocode here
*/
// Create an empty object to store the complements
// Loop through each element in the array
 // Calculate the complement required to achieve the target sum
 // Check if the complement is present in the complements object
  // If the complement is found, return the pair of elements that sum up to the target
  // If the complement is not found, add the current element to the complements object
  // If no pair is found, return an empty array

/*
  Add written explanation of your solution here
*/

function hasTargetSum([]) {
  let complements = {};
  for (let element of array) {
    let complement = target - element;

    if (complements[complement]) {
      return [true];
    }
    complements[element] = true;
  }

  return [false];
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
