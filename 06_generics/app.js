//Generics - tipos genericos
//funciones o clases que pueden trabajar con varios tipos de datos. Sin comprometer la seguridad del tipo.
// <T> convencion que representa cualquier tipo.
function identidad(parametro) {
    return parametro;
}
;
var resultado = identidad('hola');
identidad(8);
var numero = identidad(8);
// en Typescript aunque yo no tipee, si recibe un string, va a tirar un error si dsps intento cargarle uun number. salvo que use generics.
// Clases Generics:
var Lista = /** @class */ (function () {
    function Lista() {
        this.elementos = [];
    }
    Lista.prototype.agregar = function (elemento) {
        this.elementos.push(elemento);
    };
    Lista.prototype.obtenerTodos = function () {
        return this.elementos;
    };
    return Lista;
}());
//defino que van a ser numeros en la instancia:
var listaDeNumeros = new Lista();
listaDeNumeros.agregar(1);
listaDeNumeros.agregar(2);
listaDeNumeros.agregar(22);
console.log(listaDeNumeros.obtenerTodos());
var listaDeCadena = new Lista();
listaDeCadena.agregar('esto es un string 1');
listaDeCadena.agregar('esto es otro string 2');
listaDeCadena.agregar('string 3');
//tambien se podria utilizar "any" y va a compilar sin errores pero va a dar un error en tiempo de ejecucion.
//lo vamos a ver la clase que viene.
//generic hace que una funcion sea generica pero tambien segura.
