/*
Write a function howSum(targetSum , numbers), The function should return an array containing any combination of 
elemensts that add up to extactly the targetSum. If there is no comnination that adds up to the targetSum, then return null.
If there are multiple combinations return any one of those.
*/

const howSum = (targetSum, numbers) => {
    let table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for(let i = 0; i<= targetSum; i++) {
        if(table[i] !== null) {
            for(let num of numbers) {
                if(num + i <= targetSum){
                    table[num+ i] = [...table[i], num];
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

console.log(howSum(7, [5,4,3,7]))
console.log(howSum(7, [2,3]));
console.log(howSum(7, [2,4]));
console.log(howSum(8, [2,3,5]));
console.log(howSum(300, [7,14]));