/*
Write a function bestSum(targetSum , numbers), The function should return an array containing the shortest combination of 
elemensts that add up to extactly the targetSum. If there is no comnination that adds up to the targetSum, then return null.
If there are multiple shortest combinations return any one of those.
*/

const bestSum = (targetSum, numbers) => {
    let table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (num of numbers) {
                if (num + i <= targetSum) {
                    let tempArray = [...table[i], num];
                    table[num + i] = table[num + i] === null || table[num + i].length > tempArray.length ? tempArray : table[num + i];
                }
            }
        }
    }
    return table[targetSum];
}

/*
Time Complexity : O(m^2*n) (m -> iterrating through table, m -> spread operation, n-> iterating through numbers)
Space complexity : O(m*m)
*/


console.log(bestSum(7, [5, 4, 3, 7]))
console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));