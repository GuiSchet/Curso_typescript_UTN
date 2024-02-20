//funcion que verifique si un string es mas largo que el otro
function esMasLargo(a, b) {
    return a.length > b.length;
}
//operacion matematica basada en un booleano.
function operacionMatematica(a, b, sumar) {
    if (sumar) {
        return a + b;
    }
    else {
        return a - b;
    }
}
// arrays- coleccion de datos relacionados entre si.
// hay que agregar los corchetes para el tipado.
var numeros = [1, 2, 3, 4, 5];
// variable - el tipado de la misma - el valor de esa variable.
var nombres = ['maria', 'pepe', 'sofia'];
numeros.push(8);
for (var i = 0; i > nombres.length; i++) {
    console.log(nombres[i]);
}
;
nombres.forEach(function (nombre) {
    console.log(nombre);
});
var nuevoArreglo = nombres.map(function (nombre) { return nombre.toUpperCase(); });
// Arreglo mixto (no deberias utilizarlo...) number y string.
// Union type
var mixto = [1, 'dos', 3, 'cuatro'];
// como definir una variable que puede tener cualquier tipo d valor.
var variable = 10;
variable = 'hola';
variable = true;
//objeto literal:
var usuario = {
    nombre: 'Ceci',
    edad: 30
};
var pepe = {
    nombre: 'pepe',
    edad: 11,
    coloresFavoritos: ['rojo', 'rosado']
};
