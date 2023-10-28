/*
Write a function bestSum(targetSum , numbers), The function should return an array containing the shortest combination of 
elemensts that add up to extactly the targetSum. If there is no comnination that adds up to the targetSum, then return null.
If there are multiple shortest combinations return any one of those.
*/


// const bestSum = (sum, numbers) => {
//     if(sum == 0) return [];
//     if(sum < 0) return null;
//     let smallArray = null;
//     for(let num of numbers) {
//         let array = bestSum(sum-num, numbers);
//         if(array != null) {
//             array.push(num);
//             if(smallArray === null || array.length < smallArray.length){
//                 smallArray = array;
//             }
//         }
//     }
//     return smallArray;
// }

/*
TimeComplexity  = O(n^m *m)
SpaceComplexity = O(m*m) 
*/


const bestSum = (sum, numbers, memo = {}) => {
    if(sum === 0) return [];
    if(sum < 0) return null;
    if(sum in memo) return memo[sum];
    
    let smallArray = null;
    for(let num of numbers) {
        const diff = sum - num;
        let array  = bestSum(diff, numbers, memo);
        if(array != null){
            array = [...array, num]
            if(smallArray === null || array.length < smallArray.length){
                smallArray = array;
            }
        }
    }
    memo[sum] = smallArray;
    return memo[sum];
}

/*
Time complexity : O(m*n*m) = O (m^2,n)
Space Complexity : O(m^2)
*/

console.log(bestSum(7, [5,4,3,7]))
console.log(bestSum(7, [2,3]));
console.log(bestSum(7, [2,4]));
console.log(bestSum(8, [2,3,5]));
console.log(bestSum(100, [1,2,5,25]));