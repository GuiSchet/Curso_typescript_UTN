// ENUM - dato estructurado - enumeracion
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
var today = Day.Monday;
console.log(Day[0]);
// objeto literal
var PersonaUno = {
    nombre: 'Cecilia',
    edad: 24,
    profesion: 'programadora'
};
var PersonaDos = {
    nombre: 'maria',
    edad: 33,
    profesion: 'ingeniera'
};
console.log(PersonaUno);
console.log(PersonaDos);
var perro = {
    tipo: 'canino',
    nombre: 'ringo'
};
console.log(perro);
function mostrarPerro(perro) {
    console.log(perro.nombre);
}
mostrarPerro(perro);
// Representar los estados de una tarea.
var EstadoTareas;
(function (EstadoTareas) {
    EstadoTareas["Pendiente"] = "Pendiente";
    EstadoTareas["EnProgreso"] = "En progreso";
    EstadoTareas["Completado"] = "Completado";
})(EstadoTareas || (EstadoTareas = {}));
;
;
// Funcion para crear nuevas tareas
function crearTarea(id, descripcion) {
    return {
        id: id,
        descripcion: descripcion,
        estado: EstadoTareas.Pendiente
    };
}
;
// Funcion se encargue de actualizar el estado de una tarea
// ... clonar array, objeto.
function estadoTarea(tarea, nuevoEstado) {
    return __assign(__assign({}, tarea), { estado: nuevoEstado });
}
// Funcion par imprimir informacion sobre la tarea
function infoTareas(tarea) {
    console.log("Tarea ".concat(tarea.id, ": ").concat(tarea.descripcion, " - Estado: ").concat(tarea.estado));
}
// Uso de las funciones
var tareaUno = crearTarea(1, 'Pintar la casa');
var tareaDos = crearTarea(2, 'Estudiar typescript');
infoTareas(tareaUno);
tareaUno = estadoTarea(tareaUno, EstadoTareas.EnProgreso);
infoTareas(tareaUno);
;
;
;
var empleadoJuan = {
    nombre: 'Juan',
    puesto: 'Desarrollador',
    departamento: 'IT',
    ubicacion: 'oficina 122',
    seguroMedico: true,
    diasVacaciones: 201
};
var empleadaSofia = {
    nombre: 'sofia',
    puesto: 'Desarrollador',
    departamento: 'marketing',
    ubicacion: 'oficina 123',
    seguroMedico: false,
    diasVacaciones: 5
};
console.log(empleadoJuan);
// Programacion orientada a objetos. Clases.
// plantilla bastante estructurada de un objeto.
// el constructor es un metodo especial y es quien inicializa las propiedades q va a tener ell objeto cuando see implemente en la instancia real.
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        nombre: nombre;
        edad: edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " anios."));
    };
    return Persona;
}());
// saludar es un metodo de Persona.
var usuario = new Persona('Sofia', 25);
console.log(usuario);
// otra clase.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
