//NAMESPACES
//un contenedor que hace que mi codigo tenga un scope local.
var espacioA;
(function (espacioA) {
    function miFuncion() {
        console.log('Funcion que pertenece al primer bloque de Namespaces');
    }
    espacioA.miFuncion = miFuncion;
})(espacioA || (espacioA = {}));
var espacioB;
(function (espacioB) {
    function miFuncion() {
        console.log('Funcion que pertenece al primer bloque de Namespaces');
    }
    espacioB.miFuncion = miFuncion;
})(espacioB || (espacioB = {}));
//uso
espacioA.miFuncion();
espacioB.miFuncion();
// interface
var espacioC;
(function (espacioC) {
    function infoPersona(persona) {
        console.log("Nombre: ".concat(persona.nombre, ", edad: ").concat(persona.edad));
    }
    espacioC.infoPersona = infoPersona;
})(espacioC || (espacioC = {}));
// creo el objeto
var persona1 = {
    nombre: 'Maria',
    edad: 24
};
espacioC.infoPersona(persona1);
