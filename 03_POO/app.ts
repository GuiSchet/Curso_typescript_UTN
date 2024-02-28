//ENUM - dato estructurado - enumeracion

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let today: Day = Day.Monday;

switch(today) {
    case Day.Monday:
        console.log('Hoy es lunes');
        break;
    case Day.Tuesday:
        console.log('Hoy es martes');
        break;
    case Day.Wednesday:
        console.log('Hoy es miercoles');
        break;
    case Day.Thursday:
        console.log('Hoy es jueves');
        break;        
}