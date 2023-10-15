/*
Write a function humSum(targetSum , numbers), The function should return an array containing any combination of 
elemensts that add up to extactly the targetSum. If there is no comnination that adds up to the targetSum, then return null.
If there are multiple combinations return any one of those.
*/


// const howSum = (sum, numbers) => {
//     if(sum < 0) return null;
//     if(sum == 0) return [];
//     for(let num of numbers) {
//         let array = howSum(sum - num, numbers);
//         if(array != null) {
//             return [...array, num];
//         }
//     }
//     return null;
// }

/*
time complexity -> m -> targetSum and n is the size of the array
O((n^m) * m) is the timecomplexity. (multiplying factor m comes from the spread operation)
space complexity is m + m = 2m ~= O(m).
*/

const howSum = (sum, numbers, memo={}) => {
    if(sum < 0) return null;
    if(sum == 0) return [];
    if(sum in memo){
        return memo[sum]
    }
    for(let num of numbers) {
        let array = howSum(sum - num, numbers, memo);
        if(array != null) {
            array.push(num);
            memo[sum] = array;
            return memo[sum];
        }
    }
    memo[sum] = null;
    return memo[sum];
}

/*
Time complexity is O(m*n*m) = O(m^2 * n)
Space complexity is same = O(m^2)
*/

console.log(howSum(7, [5,4,3,7]))
console.log(howSum(7, [2,3]));
console.log(howSum(7, [2,4]));
console.log(howSum(8, [2,3,5]));
console.log(howSum(300, [7,14]));