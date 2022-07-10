var dia = prompt("Favor de ingresar un dia de la semana.");

if(dia.toLowerCase() == "lunes") {
    alert("Hoy es Lunes, Feliz inicio de semana.");
} else if(dia.toLowerCase() == "viernes") {
    alert("Feliz Viernes");
} if(dia.toLowerCase() == "sabado" || dia.toLowerCase() == "domingo") {
    alert("Es fin de semana.")
} else {
    alert("Buen día.")
}
