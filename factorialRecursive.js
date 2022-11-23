function factcorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factcorial(n-1)
    }
}
var result = factcorial(5)
console.log(result)
console.log(720 * 7)