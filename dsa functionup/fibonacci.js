///////////////
function fib(n){
    if(n==0) return 0
    if(n==1) return 1

    //recursive
    return fib(n-1)+ fib(n-2)
}
console.log(fib(10))

/////////////
function SumN(n){
    //base
    if(n<=0) return 0

    //recursive
    return n+SumN(n-1)
}
console.log(SumN(10));