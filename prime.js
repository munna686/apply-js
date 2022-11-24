// var n = 128
function isprime(n) {
    for(i = 2; i <= n; i++){
        // console.log(i, n % i)
        if (n % i == 0){
            return 'its not a prime number'   
        }
        else{
            return 'its a prime number'  
        }
    }   
}
    var result = isprime(10)
    console.log(result)
     