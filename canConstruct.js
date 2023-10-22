/* 
Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the target can be constructed by
concatenating elements of the wordBank array.

You may reuse the elements of wordBank as many times as needed.
*/

// const canConstruct = (target, wordBank) => {
//     if(target.length === 0) return true;
    
//     for(let word of wordBank) {
//         if(target.indexOf(word) === 0) {
//             let suffix = target.slice(word.length);
//             if(canConstruct(suffix, wordBank)){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

/*
TimeComplexity : O(n^m *m) n: size of the array. m size of target
SpaceComplexity : O(m^2)
*/


const canConstruct = (target, wordBank, memo = {}) => {
    if(target === '') return true;
    if(target in memo) return memo[true];

    for(let word of wordBank) {
        if(target.indexOf(word) === 0){
            memo[target] = canConstruct(target.slice(word.length), wordBank, memo);
            if(memo[target]) {
                return true;
            }
        }
    }
    memo[target] = false;
    return memo[target];
}

/*
TimeComplexity : O(m*n*m) = O(m^2 *n)
SpaceComplexity: O(m^2)
*/


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]))