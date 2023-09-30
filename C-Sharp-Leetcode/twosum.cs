public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for (int i = 0; i <nums.Length; i++)
        {
            for (int j = 0; j < nums.Length; j++)
            {
                if (i != j)
                {
                    int result = nums[i] + nums[j];
                    if (result == target)
                    {
                        return new int[] {i, j};
                    }
                }
            }
        }
        return null;
    }
}