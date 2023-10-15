/*

conside below code 

const lib(n) => {
    if(n == 1) return;
    lib(n-1)
    lib(n-1)
}

                                    lib(6)
                                    /    \
                                lib(5)   lib(5)
                                /    \        /    \
                            lib(4)   lib(4)   lib(4) lib(4)
                            /   \     /    \     /  \      /   \
                        lib(3)  lib(3) lib(3) lib(3) lib(3) lib(3) lib(3) lib(3) lib(3)
                        /   \     /    \     /  \      /   \ /   \     /    \     /  \      /   \
                   lib(2)  lib(2) lib(2) lib(2) lib(2) lib(2) lib(2) lib(2) lib(2) lib(2)  lib(2) lib(2) lib(2) lib(2) lib(2) lib(2) lib(2) lib(2)
                /   \     /    \     /  \      /   \ /   \     /    \     /  \      /   \ /   \     /    \     /  \      /   \ /   \     /    \     /  \      /   \ /   \     /    \     /  \      /   \ /   \     /    \     /  \      /   \
lib(1)  lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1)  lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1)  lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1)  lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1) lib(1)     

here no of function call is doubling in each step. (getting multiplied by 2)
Timecomplexity = 1 + 2 + 4 + 8+ 16 + 32 = 1 + 2^1 + 2^2 +...+ 2^n-1 ~= 2^n ~= 2 ^ (dept of the tree)
*/

/*
consider this 


const dib(n) => {
    if(n <= 2) return;
    dib(n-2)
    dib(n-2)
}

                            dib(6)
                            /    \
                        dib(4)       dib(4)
                        /    \        /    \
                    dib(2)   dib(2) dib(2) dib(2)

here the time complexity is 2^(n/2) ~= 2^n
*/

// let fib = (n) => {
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }


// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));


/*



Consider tree for fibonacci problem

                               fib(6)   
                           /             \       
                      /                       \
                 fib(5)                       fib(4)
                /     \                      /     \
            fib(4)     fib(3)              fib(3)   fib(2)
            /    \         /    \           /   \
        fib(3)   fib(2)   fib(2) fib(1)   fib(2) fib(1)
        /    \     
    fib(2)   fib(1) 
    
    This tree is equivalent to above tree but the tree stops growing when it hits fib(2) or fib(1) as they are ending conditions.
    The complexity of this greater than dib() function but less than lib() function.
    Hence the time complexity is same
*/

// Time complexity is 2^n and space complexity is n.

// console.log(fib(50));   // takes 2^50 computation.


// In order to imporve this solution, we need to use memoization.
// The best way is to use a Hashmap so that we can store memoized values(previous computed useful values).
// In javascript let us use object. key will be fibonacci index i and value will be fibonacci number at index i.

const fibOptimized = ((n, memo={}) => {
    if(n in memo) return memo[n];
    if(n <= 2) {
        memo[n] = 1;
        return memo[n];
    };
    memo[n] = fibOptimized(n-1, memo) + fibOptimized(n-2, memo);
    return memo[n];
})

console.log(fibOptimized(50));


/*
Now the recursion calls are reduced like this

                        fib(6)
                        /    \
                    fib(5)   fib(4)
                    /    \
                fib(4)   fib(3)
                /   \
            fib(3)  fib(2)
            /    \ 
        fib(2)   fib(1)


    Time complexity = 1 + 2 + 2 + 2 + 2 ~= n.2 ~= n
    space complexity = n.(max n entries in the function stack)
*/

