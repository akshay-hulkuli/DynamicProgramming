/* 
Write a function canConstruct(target, wordBank) that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the target can be constructed by
concatenating elements of the wordBank array.

You may reuse the elements of wordBank as many times as needed.
*/


const canConstruct = (target, wordBank) => {
    let table = Array(target.length + 1).fill(false);
    table[0] = true;

    for(let i=0 ; i<=target.length; i++){
        if(table[i]){
            let currentString  = target.slice(i);
            for(let word of wordBank) {
                if(currentString.indexOf(word) === 0){
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}

/*
Time complexity : O(m^2 * n) (m -> iterating through table, m -> slice operation, n-> iterating through wordBank)
Space complexity : O(m)
*/


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]))