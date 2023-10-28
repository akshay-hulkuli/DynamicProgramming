/* 
Write a function allConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return the 2D array conatining all the of ways that the target can be constructed by concatenating elements
of the wordbank array. Each element of the 2D array should represent one combination that constructs the target.

You may reuse the elements of wordBank as many times as needed.
*/

// const allConstruct = (target, wordBank) => {
//     if(target === '') return [[]];
//     let allArrays = [];
//     for(let word of wordBank) {
//         if (target.indexOf(word) === 0){
//             let tempArray = allConstruct(target.slice(word.length), wordBank);
//             if(tempArray.length !== 0) {
//                 for(let a of tempArray){
//                     a = [word, ...a]
//                     allArrays.push(a);
//                 }

//             }
//         }
//     }
//     return allArrays;
// }

/*
TimeComplexity = O(n^m * n^m *m) ~= exponential
Space complexity = O(m) we ignore the array size
*/


const allConstruct = (target, wordBank, memo = {}) => {
    if(target === "") return [[]];
    if(target in memo) return memo[target];

    let allArrays = [];
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            let tempArrays = allConstruct(target.slice(word.length), wordBank, memo);
            if(tempArrays.length != 0) {
                tempArrays = tempArrays.map( ta => [word, ...ta]);
                allArrays = [...allArrays, ...tempArrays]
            }
        }
    }
    memo[target] = allArrays;
    return memo[target];
}

/*
Time complexity : O(n*m * n^m * m) (n^m is due to 2D array computation) ~= Exponential
Space complexity : O(m)
*/


console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "de", "f"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]))