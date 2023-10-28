/*
You will be given with a 2-d grid of size m*n. 
Find the number ways in which bot can move from the top left corner to the bottom right corner. 
bot is allowed to make either right or down move.
*/


/*
Consider example of gridTraveller(3,3)
The base condition is that gridTraveller(1,1) = 1;

we have to create a table like this ->
 --- --- --- ---
| 0 | 0 | 0 | 0 |
 --- --- --- ---
| 0 | 0 | 0 | 0 |  
 --- --- --- ---
| 0 | 0 | 0 | 0 |
 --- --- --- ---
| 0 | 0 | 0 | 0 |
 --- --- --- ---

 Then we need to intialize position (1,1) with value 1.
 --- --- --- ---
| 0 | 0 | 0 | 0 |
 --- --- --- ---
| 0 | 1 | 0 | 0 |  
 --- --- --- ---
| 0 | 0 | 0 | 0 |
 --- --- --- ---
| 0 | 0 | 0 | 0 |
 --- --- --- ---


 We now that we can move in 2 direction right and bottom.
 So add current cell value to the right bottom adjecent cells.
 
  --- --- --- ---
| 0 | 0 | 0 | 0 |
 --- --- --- ---
| 0 | 1 | 1 | 1 |  
 --- --- --- ---
| 0 | 1 | 2 | 3 |
 --- --- --- ---
| 0 | 1 | 3 | 6 |
 --- --- --- ---

 Then the value at position (3,3) is the solution to gridTraveller(3,3)
*/


const gridTraveller = (m, n) => {
    if(m < 0 || n < 0) return 0;

    let table = Array(m+2).fill().map(() => Array(n+2).fill(0));
    table[1][1] = 1;

    for(let i=0; i<=m; i++){
        for(let j=0; j<=n; j++) {
            table[i+1][j]+= table[i][j];
            table[i][j+1] += table[i][j];
        }
    }
    return table[m][n];
}

/*
Time complexity : O(m*n)
Space complexity: O(m*n)
*/

console.log(gridTraveller(1,1));
console.log(gridTraveller(2,3));
console.log(gridTraveller(3,2));
console.log(gridTraveller(3,3));
console.log(gridTraveller(18, 18));