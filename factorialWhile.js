function factorial(n){
    var i = 1;
    var factorial = 1;
    while(i <= n) {
        factorial = factorial * i;
        i++;
}
return factorial;
}
// var num = factorial(10)
var num = factorial(5)
console.log(num)
