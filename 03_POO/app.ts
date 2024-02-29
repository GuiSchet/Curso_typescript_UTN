// ENUM - dato estructurado - enumeracion

enum Day {
    Monday = 0,
    Tuesday = 1,
    Wednesday = 2,
    Thursday = 3,
    Friday = 4,
    Saturday = 5,
    Sunday = 6
}

let today: Day = Day.Monday;

console.log(Day[0]);

// Interface, para crear un esquema de objeto.
// no existe como objeto.
interface Persona1 {
    nombre: string,
    edad: number,
    profesion: string
}

// objeto literal
let PersonaUno: Persona1 = {
    nombre: 'Cecilia',
    edad: 24,
    profesion: 'programadora'
}

let PersonaDos: Persona1 = {
    nombre: 'maria',
    edad: 33,
    profesion: 'ingeniera'
}

console.log(PersonaUno);
console.log(PersonaDos);

// Extender una interface de otra.

interface Animal {
    tipo: string,
}

interface Mascota extends Animal {
    nombre: string
}

let perro: Mascota = {
    tipo: 'canino',
    nombre: 'ringo'
}

console.log(perro);

function mostrarPerro(perro: Mascota) {
    console.log(perro.nombre);
}

mostrarPerro(perro);

// Representar los estados de una tarea.

enum EstadoTareas {
    Pendiente = 'Pendiente',
    EnProgreso = 'En progreso',
    Completado = 'Completado'
};

interface Tareas {
    id: number,
    descripcion: string,
    estado: EstadoTareas
};

// Funcion para crear nuevas tareas

function crearTarea(id: number, descripcion: string): Tareas {
    return {
        id: id,
        descripcion: descripcion,
        estado: EstadoTareas.Pendiente
    }    
};

// Funcion se encargue de actualizar el estado de una tarea
// ... clonar array, objeto.
function estadoTarea (tarea: Tareas, nuevoEstado: EstadoTareas): Tareas {
    return {...tarea, estado: nuevoEstado}
}

// Funcion par imprimir informacion sobre la tarea
function infoTareas(tarea: Tareas) {
    console.log(`Tarea ${tarea.id}: ${tarea.descripcion} - Estado: ${tarea.estado}`);
}

// Uso de las funciones

let tareaUno = crearTarea(1, 'Pintar la casa');
let tareaDos = crearTarea(2, 'Estudiar typescript');
infoTareas(tareaUno);
tareaUno = estadoTarea(tareaUno, EstadoTareas.EnProgreso);
infoTareas(tareaUno);

// Mezclar interface

interface Empleado {
    nombre: string,
    puesto: string
};

interface Departamento {
    departamento: string,
    ubicacion: string
};

interface Beneficios {
    seguroMedico: boolean,
    diasVacaciones: number
};

// interseccion de interfaces.

type InformacionEmpleado = Empleado & Departamento & Beneficios;

let empleadoJuan: InformacionEmpleado = {
    nombre: 'Juan',
    puesto: 'Desarrollador',
    departamento: 'IT',
    ubicacion: 'oficina 122',
    seguroMedico: true,
    diasVacaciones: 201
}

let empleadaSofia: InformacionEmpleado = {
    nombre: 'sofia',
    puesto: 'Desarrollador',
    departamento: 'marketing',
    ubicacion: 'oficina 123',
    seguroMedico: false,
    diasVacaciones: 5
}

console.log(empleadoJuan);

// Programacion orientada a objetos. Clases.
// plantilla bastante estructurada de un objeto.

// el constructor es un metodo especial y es quien inicializa las propiedades q va a tener ell objeto cuando see implemente en la instancia real.
class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        nombre: nombre;
        edad: edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} anios.`)
    }
}
// saludar es un metodo de Persona.

const usuario = new Persona('Sofia', 25);
console.log(usuario);

// otra clase.
class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }
  }

