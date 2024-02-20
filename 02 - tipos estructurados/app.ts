//funcion que verifique si un string es mas largo que el otro

function esMasLargo (a: string, b: string): boolean {
    return a.length > b.length;
}

//operacion matematica basada en un booleano.

function operacionMatematica (a: number, b: number, sumar: boolean): number {
    if (sumar) {
        return a + b;
    }
    else {
        return a - b;
    }
}

// arrays- coleccion de datos relacionados entre si.
// hay que agregar los corchetes para el tipado.
let numeros:  number[] = [1,2,3,4,5];

// variable - el tipado de la misma - el valor de esa variable.

let nombres: string[] = ['maria', 'pepe', 'sofia'];

numeros.push(8);

for (let i=0; i>nombres.length; i++) {
    console.log(nombres[i]);
};

nombres.forEach(nombre => {
    console.log(nombre);
});

let nuevoArreglo: string[] = nombres.map(nombre => nombre.toUpperCase());

// Arreglo mixto (no deberias utilizarlo...) number y string.
// Union type

let mixto: (string | number)[] = [1, 'dos', 3, 'cuatro'];

// como definir una variable que puede tener cualquier tipo d valor.

let variable: any = 10;
variable = 'hola';
variable = true;

//objeto literal:

const usuario = {
    nombre: 'Ceci',
    edad: 30
}

//TYPE - tipear un objeto de usuario

type user = {
    nombre: string,
    edad: number,
    coloresFavoritos: string[]
};

let pepe: user = {
    nombre: 'pepe',
    edad: 11,
    coloresFavoritos: ['rojo', 'rosado']
}

