var removeElement = function (nums, val) {
  let k = nums.filter((number) => number !== val);

  nums.length = 0; //reset nums
  nums.push(...k);
  return k.length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
