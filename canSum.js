/*
Write a function `canSum(targetSum, numbers)` that in a targetsum and an array of numbers as araguements.
The functions returns true or false based on whether the sum can be created by adding some numbers in the array.
We can use an element of an array as many time as possible and all numbers are non negatives.
*/

/*
Example : canSum(7, [5,3,4,7]) -> true

                                          cS(7)
                               /        |          |     \
                        /            |                |      \
                -5 /              -3 |                | -4        \ -7
                cs(2)              cs(4)            cs(3)           cs(0)
                               -3/     \-4         -3 | 
                            cs(1)        cs(0)       cs(0)  
                
    number of branches that a node can take is n (n is size of the array)
    the max depth is targetSum let us call it m.
    Hence the time complexity is n^m.
    Space complexity is m.
*/

// const canSum = (sum, numbers) => {
//     if(sum < 0) return false;
//     if(sum === 0) return true;
//     for(let num of numbers) {
//         if(canSum(sum - num, numbers)){
//             return true;
//         } 
//     }
//     return false;
// }

// console.log(canSum(7, [5,3,4,7]));
// console.log(canSum(7, [2,3]));
// console.log(canSum(7, [2,4]));
// console.log(canSum(300, [7,14]));


// optimization using tabulation

const canSum = (sum, numbers, memo = {}) => {
    if(sum < 0) return false;
    if(sum === 0) return true;
    if(sum in memo) return memo[sum];
    for(let num of numbers) {
        if(canSum(sum - num, numbers, memo)){
            memo[sum] = true;
            return memo[sum];
        } 
    }
    memo[sum] = false;
    return memo[sum];
}

// Time complexity is m*n.
// Space complexity is m


console.log(canSum(7, [5,3,4,7]));
console.log(canSum(7, [2,3]));
console.log(canSum(7, [2,4]));
console.log(canSum(300, [7,14]));