// Definir una clase que representa a cada empleado.
var Empleado = /** @class */ (function () {
    function Empleado(id, nombre, cargo, salario) {
        this.id = id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
    }
    //Metodo.
    Empleado.prototype.activarInfo = function () {
        console.log("ID: ".concat(this.id, ", ").concat(this.nombre, " , ").concat(this.cargo, ", ").concat(this.salario));
    };
    return Empleado;
}());
;
//creo las iinstancias en base a la clase.
var empleadoUno = new Empleado(1, 'Juan', 'Desarrollador', 3000);
var empleadoDos = new Empleado(2, 'Pepa', 'administrativo', 2333);
empleadoDos.activarInfo();
// Logica hacia el DOM
var empleadosAlmacenados = [];
// Funcion que se encargue de agregar un empleado a la tabla.
function agregarEmppleado() {
    //obtener los valores del input
    var nombre = document.getElementById('nombre');
    if (nombre) {
        var nombreInput = nombre.value;
    }
    ;
    var cargo = document.getElementById('cargo');
    if (cargo) {
        var cargoInput = cargo.value;
    }
    ;
}
;
