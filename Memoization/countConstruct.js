/* 
Write a function countConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return the number of ways that the target can be constructed by concatenating elements
of the wordbank array.

You may reuse the elements of wordBank as many times as needed.
*/


// const countConstruct = (target, wordBank) => {
//     if(target === '') return 1;
//     let count = 0;
//     for(word of wordBank) {
//         if(target.indexOf(word) === 0) {
//             let num = countConstruct(target.slice(word.length), wordBank);
//             count += num;
//         }
//     }
//     return count;
// }

/*
Time complexity -> O(n^m *m)
Space Compexity -> O(m^2)
*/


const countConstruct = (target, wordBank, memo = {}) => {
    if(target === '') return 1;
    if(target in memo) return memo[target]
    let count = 0;
    for(word of wordBank) {
        if(target.indexOf(word) === 0) {
            let num = countConstruct(target.slice(word.length), wordBank, memo);
            count += num;
        }
    }
    memo[target] = count;
    return count;
}

/*
Time complexity : O(n * m^2)
Space complexity: O(m^2)
*/

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]))