// var factorial = 1;
// for(var i = 1; i <= 10; i++ ){
//     factorial = factorial * i
//     console.log(i , factorial)
// }


function fact(n){
    if(n == 1){
        return 1
    }

    else{
        return n*fact(n-1)
    }
}

var result = fact(15)
console.log(result)



