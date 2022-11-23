function fibonacci(n){
    var fibo = [0, 1 ,];

    for(var i = 2; i <= n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
    
}
return fibo;
}
var result = fibonacci(12)
console.log(result);


function fib(n){
    var fibo = [0, 1]
    for(i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}

var final = fib(6)
console.log(final)