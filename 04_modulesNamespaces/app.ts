//NAMESPACES
//un contenedor que hace que mi codigo tenga un scope local.

namespace espacioA {
    export function miFuncion (){
        console.log('Funcion que pertenece al primer bloque de Namespaces');    
    }
}

namespace espacioB {
    export function miFuncion (){
        console.log('Funcion que pertenece al primer bloque de Namespaces');    
    }
}

//uso

espacioA.miFuncion();
espacioB.miFuncion();

// interface

namespace espacioC {
    export interface Persona {
        nombre: string;
        edad: number;
    }

    export function infoPersona (persona: Persona){
        console.log(`Nombre: ${persona.nombre}, edad: ${persona.edad}`);
    }
}

// creo el objeto

let persona1: espacioC.Persona = {
    nombre: 'Maria',
    edad: 24
}
espacioC.infoPersona(persona1);