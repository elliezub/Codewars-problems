// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(...arr) {
  // make new arr
  // loop through arr, then loop through the individual elements in the arrays
  // if the item is not already in the new arr push to new arr
  let newArr = [];

  for (let subArray of arr) {
    for (let item of subArray) {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    }
  }

  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
