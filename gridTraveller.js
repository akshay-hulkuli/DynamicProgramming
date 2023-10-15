/*
You will be given with a 2-d grid of size n*m. 
Find the number ways in which bot can move from the top left corner to the bottom right corner. 
bot is allowed to make either right or down move.
*/

/*
base cases -> 
1. if you are in a 1*1 grid. you are already in the solution return 1. gT(1,1) => 1.
2. if you are in any invalid grid cases like gT(0,1) or gT(1,0) or gT(0,0) return 0.

If we move downward we reduce the no of rows by 1.
If we move right we reduce the no of columns by 1.
This is how the grid gets simplified per each move.

let us try writting a tree for this. 
Each node will have 2 branches representing down and right move.

                                         gt(2,3)
                                     /             \
                                /                       \
                        (D) /                                \ (R)
                        gT(1,3)                              gt(2,2)
                  (D) /       \ (R)                 (D) /            \ (R)
                gt(0,3)        gt(1,2)              gt(1,2)          gt(2,1)
                          (D) /    \ (R)    (D) /      \ (R)  (D) /      \ (R)
                          gt(0,2)  gt(1,1)  get(0,2)  gt(1,1) gt(1,1)   gt(2,0)
                                    (ans)              (ans)   (ans)
           
    Whereever we get gt(1,1) that represents the solution. 
    If we hit zero(column or row value) in any case that is the invalid case. candidate for termination.
    for invalid case return 0. For gt(1,1) return 1. at each parent node return sum of each child.
*/


// const gridTraveller = (m,n) => {
//     if(m == 1 && n == 1) return 1;
//     if(m == 0 || n == 0) return 0;
//     return gridTraveller(m-1, n) + gridTraveller(m, n-1);
// }

// console.log(gridTraveller(1,1));
// console.log(gridTraveller(2,3));
// console.log(gridTraveller(3,2));
// console.log(gridTraveller(3,3));
// console.log(gridTraveller(18, 18));

/*
ans -> 
1
3
3
6
2333606220
*/

// Time complexity is 2^(m+n) and the space complexity is m+n


// Optimizing the code by memoization
// please note gt(a,b) is same as gt(b,a)

const gridTraveller = (m,n, memo = {}) => {
    // key generation is done based on rule gt(a,b) is same as gt(b,a)
    let key = m > n ? m + "," + n : n + "," + m;
    if((key) in memo) return memo[key];
    if(m == 1 && n == 1) {
        memo[key] = 1;
        return memo[key];
    } 
    if(m == 0 || n == 0) {
        memo[key] = 0;
        return memo[key];
    }
    memo[key] = gridTraveller(m-1, n, memo) + gridTraveller(m, n-1, memo);
    return memo[key];
}

console.log(gridTraveller(1,1));
console.log(gridTraveller(2,3));
console.log(gridTraveller(3,2));
console.log(gridTraveller(3,3));
console.log(gridTraveller(18, 18));

/*
    for m,n input.
    in the current way we can have max m*n nodes unique nodes in the tree.
    There won't be duplicate nodes due to memoization

    Hence the time complexity is m*n
    The space complexity is m+n
*/