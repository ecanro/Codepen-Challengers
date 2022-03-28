//crear una funcion que tome un array de numeros y strings y me devuelva solo los numeros
//ejm: [1, 2, 3, 'a', 'b']--> [1, 2, 3]
function filterArray ( arr ) {
    return arr.filter( item => typeof item != 'string').sort()
}
console.log(filterArray(['hola', 1, 3, 5, 'a']));