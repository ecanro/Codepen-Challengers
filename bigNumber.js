//encontrar cual es el numero mayor en un array

function findBiggestNum(arr) {
let bigNum = 0;
    for (let num of arr) {
        if ( num > bigNum) {
        bigNum = num;
        }
    } return bigNum;
}
console.log(findBiggestNum([4, 5, 1, 3]));//->5
console.log(findBiggestNum([300, 200, 600, 150]));//->600
console.log(findBiggestNum([1000, 1001, 857, 1]));//->1001


  //ahora com match.max() y ... 
function findBiggestNum1(arr) {
    return Math.max(...bigNum);
}
console.log(findBiggestNum1([4, 5, 1, 3]));
console.log(findBiggestNum1([300, 200, 600, 150]));
console.log(findBiggestNum1([1000, 1001, 857, 1]));


//ahora con apply
function findBiggestNum2 ( arr ) {
    return Math.max.apply(null, arr);
}
console.log(findBiggestNum2([4, 5, 1, 3]));
console.log(findBiggestNum2([300, 200, 600, 150]));
console.log(findBiggestNum2([1000, 1001, 857, 1]));