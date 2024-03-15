//Generics - tipos genericos
//funciones o clases que pueden trabajar con varios tipos de datos. Sin comprometer la seguridad del tipo.
// <T> convencion que representa cualquier tipo.

function identidad<T>(parametro: T){
    return parametro;
};

let resultado = identidad<string>('hola');
identidad(8);
let numero = identidad<number>(8);

// en Typescript aunque yo no tipee, si recibe un string, va a tirar un error si dsps intento cargarle uun number. salvo que use generics.
// Clases Generics:

class Lista<Elemento> {
    elementos: Elemento[];

    constructor(){
        this.elementos = [];
    }

    agregar(elemento: Elemento){
        this.elementos.push(elemento);
    }
    obtenerTodos(): Elemento[]{
        return this.elementos;
    }
}

//defino que van a ser numeros en la instancia:

let listaDeNumeros = new Lista<number>();
listaDeNumeros.agregar(1);
listaDeNumeros.agregar(2);
listaDeNumeros.agregar(22);
console.log(listaDeNumeros.obtenerTodos());

let listaDeCadena = new Lista<string>();
listaDeCadena.agregar('esto es un string 1');
listaDeCadena.agregar('esto es otro string 2');
listaDeCadena.agregar('string 3');

//tambien se podria utilizar "any" y va a compilar sin errores pero va a dar un error en tiempo de ejecucion.
//lo vamos a ver la clase que viene.
//generic hace que una funcion sea generica pero tambien segura.



