/* 
Write a function countConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return the number of ways that the target can be constructed by concatenating elements
of the wordbank array.

You may reuse the elements of wordBank as many times as needed.
*/


const countConstruct = (target, wordBank) => {
    let table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for(let i=0; i<= target.length; i++){
        if(table[i] !== 0) {
            let currentString = target.slice(i);
            for(let word of wordBank) {
                if(currentString.indexOf(word) === 0) {
                    table[word.length + i] = table[i] + table[word.length +i];
                }
            }
        }
    }
    return table[target.length];
}

/*
TimeComplexity = O(m^2*n)
SpaceComplexity = O(m)
*/


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]))