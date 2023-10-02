// public class Solution {
//     public bool ContainsDuplicate(int[] nums) {
//         for (int i = 0; i < nums.Length; i++)
//         {
//             for (int j = 0; j < nums.Length; j++)
//             {
//                 if (i != j && nums[i] == nums[j])
//                     return true;
//             }
//         }
//         return false;
//     }
// }

// top solution not accepted because time limit exceeded

public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet<int> seen = new HashSet<int>();
        foreach (int num in nums)
        {
            if (seen.Contains(num))
            {
                return true;
            }
            seen.Add(num);
        }
        return false;
    }
}

//  for a HashSet, imagine a magical room where you just shout the name of a toy, 
//  and the room instantly tells you if the toy is there or not. You don't care 
//  where the toy is; you just want to know if it's in the room.