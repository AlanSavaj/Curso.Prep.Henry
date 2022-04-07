// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
    var primerMayusc = nombre.charAt(0).toUpperCase() + nombre.slice(1)
    return primerMayusc


}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

 return cb(cb); /// mejor hubiera sido un cb();

}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
 return cb(n1,n2)
}


function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
// numeros [1, 2 , 3, 4] 

var sumaArr = numeros.reduce(function(acc, num) {
  return acc + num});
  
  cb(sumaArr)


}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
// array = [a, b , c , d]

for (var i = 0; i < array.length; i ++) {
   cb (array[i])
}
 


}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

// var nuevoArray = [] 
  //for (var i = 0; i< array.length; i++) {
    ///nuevoValor = cb(array[i]);
   // nuevoArray.push(nuevoValor)  
  //}
    //return nuevoArray

 //var nuevoArray = array.map(cb(array))    no salio con el map
 //return nuevoArray  

var nuevoArray = array.map(function (num) { return cb(num)});
 return nuevoArray 
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

var arrayFiltrado = array.filter(function(element) {
  return element.charAt(0) == 'a'
});
  return arrayFiltrado;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
