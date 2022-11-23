// const year = 2010;
// let reminder = year % 4;
// if(reminder == 0){
//     console.log('Your year is a leap Year')
// }
// else{
//     console.log('Your Year is not a leap Year');
// }

function checkLeap(year){
    
    const reminder = year % 4;
    if(reminder == 0){
    return true;
    }
    else{
    return false;
    }

}

var poss1 = checkLeap(2002)
console.log(poss1)


