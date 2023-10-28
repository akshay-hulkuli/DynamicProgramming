/*
Write a function `canSum(targetSum, numbers)` that in a targetsum and an array of numbers as araguements.
The functions returns true or false based on whether the sum can be created by adding some numbers in the array.
We can use an element of an array as many time as possible and all numbers are non negatives.
*/

/*
if targetSum is t then we create an array of size t + 1.
Each index represents a smaller targetSum.
Let us initialize the array with false.
Inoder to create a sum of 0 we need to element  hence make 0th position true.
Then iterate through numbers mark those corresponding indecises with true.

Example : 7, [5,3,4]

  0   1   2   3   4   5   6   7
 --- --- --- --- --- --- --- --- 
| T | F | F | T | T | T | F | F |
 --- --- --- --- --- --- --- ---

now start Itertating through the array if the current element is false skip it.
else mark indecies at position 5,3,4 away from current position true.
Continue till the last element

  0   1   2   3   4   5   6   7
 --- --- --- --- --- --- --- --- ---
| T | F | F | T | T | T | T | T |   |
 --- --- --- --- --- --- --- --- ---
             |||          ^   ^   ^ 
             |||   (3)    |   |   |
             ||-----------    |   |
             ||      (4)      |   |
             | ---------------    |
             |         (5)        |
              ---------------------        

*/


const canSum = (targetSum, numbers) => {
    let table = Array(targetSum + 1).fill(false);
    table[0] = true;
    let i = 0;
    for(let target of table) {
        if(target) {
            for(let num of numbers){
                if(num + i <= targetSum) table[num+i] = true;
            }
        }
        i++;
    }
    return table[targetSum];
}

/*
Time complexity  = O(m*n) m-> targetSum, n-> size of numbers array
Space complexity = O(m)
*/

console.log(canSum(7, [5,3,4,7]));
console.log(canSum(7, [2,3]));
console.log(canSum(7, [2,4]));
console.log(canSum(300, [7,14]));