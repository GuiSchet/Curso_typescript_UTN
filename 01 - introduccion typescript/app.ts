// las variables en typescript tienen que crearse junto con el tipo de dato asignado. "tipeada"
let cadena: string = 'esto es una cadena de texto';

// no va a dejar pisar el tipo de datos;
//cadena = 23; va a dar error.

let edad: number = 24;

let booleano: boolean = true;

console.log(cadena);

//datos estructurados:
// los parametros son de tipo dato nuumber, pero tb defino q si o si la funcion devuelve un dato numerico si o si.
function sumar(a: number, b: number): number {
    return a + b;

}

console.log(sumar(15, 10));

function concatenarString (a: string, b: string): string {
    return a + b;
}