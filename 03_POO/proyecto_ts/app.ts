// Definir una clase que representa a cada empleado.

class Empleado {
    id: number;
    nombre: string;
    cargo: string;
    salario: number;
    
    constructor (id: number, nombre: string, cargo: string, salario: number) {
        this.id = id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
    }
    //Metodo.
    activarInfo() {
        console.log(`ID: ${this.id}, ${this.nombre} , ${this.cargo}, ${this.salario}`);
    }
};

//creo las iinstancias en base a la clase.

const empleadoUno = new Empleado(1, 'Juan', 'Desarrollador', 3000);
const empleadoDos = new Empleado(2, 'Pepa', 'administrativo', 2333);

empleadoDos.activarInfo();

// Logica hacia el DOM
const empleadosAlmacenados = [];

// Funcion que se encargue de agregar un empleado a la tabla.

function agregarEmppleado() {
    //obtener los valores del input
    const nombre: HTMLInputElement = document.getElementById('nombre') as HTMLInputElement;
    if(nombre) {
        const nombreInput: string = nombre.value;
    };
    const cargo: HTMLInputElement = document.getElementById('cargo') as HTMLInputElement;
    if(cargo) {
        const cargoInput: string = cargo.value;
    };    
};


