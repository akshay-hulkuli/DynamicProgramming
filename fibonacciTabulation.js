/* 
Write a function fib(n) that takes in a number as an argument. The function should return the nth number of the Fibonacci squence.

The 0th number of the fibonacci sequence is 0
The 1th number of the fibonacci sequence is 1
*/

/*
The solution is using the tabulation
In tabulation we don't use recursion, instead it will be iterative way.
*/

const fib = (n) => {
    if(n === 0) return 0;
    if(n === 1) return 1;
    let array = new Array(n + 2);
    array.fill(0);
    array[1] = 1;
    for(let i = 0; i < n; i++){
        array[i + 1] = array[i+1] + array[i] 
        array[i + 2] = array[i+2] + array[i]
    }
    return array[n-1];
}


/*
Time complexity : O(n)
Space Complexity : O(n)
*/
console.log(fib(6));
console.log(fib(16));
console.log(fib(7));
console.log(fib(8));
console.log(fib(99));