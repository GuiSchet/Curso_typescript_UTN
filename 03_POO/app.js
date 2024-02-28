//ENUM - dato estructurado - enumeracion
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
switch (today) {
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
