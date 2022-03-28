//reverse un string provisto
//ejm: 'canro'->ornac;
//ejm: 'Edgar Canro'->"ornaCragdE"
function revString (str) {
    return str.replace(/ /, '').split('').reverse().join('');//sin espacios''
}
console.log(revString('Hola mundo'))

//con ....
function revString1 (str) {
    str = str.replace(/ /, '')//esto lo uso por si acaso la cadena tiene espacios
    return [...str].reverse().join('');//sin espacios''
}
console.log(revString1('Hola mundo'))

//ahora con for loops, seria un poco mas complicado, tenemos que hacerlo invertido
//para ir armando el string invertido
function revString2 (str) {
    let revString = '';
    //entonces empezamos el ciclo desde la ultima letra hasta la primera que seria 0
    for ( var i = str.length - 1; i >= 0; i--) {
        revString += str[i];
        //console.log(revString)
    } return revString;
}

console.log(revString2('Hola mundo'))

//una manera mas lenta si el string es muy largo con charAt and comparador ternario
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

//con for of
function revStr (str) {
    let reverStr = '';
    for(let letter of str) {
        reverStr = letter + reverStr;//aqui lo invertimos
        coso
    } return reverStr;
}
console.log(revStr('Hola Mundo'))