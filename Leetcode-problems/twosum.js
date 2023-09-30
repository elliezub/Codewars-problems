var twoSum = function(nums, target) {
    for (let i = 0; i <nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i != j) {
                    let result = nums[i] + nums[j];
                    if (result == target) {
                        let newArray = [i, j];
                        return newArray;
                    }
                }
            }
        }
};