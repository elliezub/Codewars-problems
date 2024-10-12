// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//             for (let j = 0; j < nums.length; j++) {
//                 if (i != j && nums[i] == nums[j])
//                     return true;
//             }
//         }
//     return false;
// };

// better solution

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniqueNums = new Set();
   for (let num of nums) {
       if (uniqueNums.has(num)) {
           return true;
       }
       uniqueNums.add(num);
   }
   return false;
};