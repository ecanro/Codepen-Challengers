//palindrome
function palindrome (str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
//now return true or false
    return (str === [...str].reverse().join(''));
}
console.log(palindrome('Eva, Can I Stab Bats In A Cave?'))//->true
console.log(palindrome('Eva, Can I Stabsssss Bats In A Cave?'))//->true???
//explained: Stabsssss is equal to Stab ssss how sssss is in the mid of sentence and this 
//is a palindrome for this is true, but in other position return false

//con ciclo for
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
    }
    return true;
}
console.log(palindrome("Eva, Can I Stabs 1ssss Bats In A Cave?"));//--false

   //con for of
function palindrome (str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
    let revStr = '';
    for (let letter of str){
    revStr = letter + revStr;
    }return str === revStr;
} 

console.log(palindrome('Eva, Can I Stab Bats In A Cave?'))//->true
console.log(palindrome('Eva, Can I Stabsssss Bats In A Cave?'))//->true