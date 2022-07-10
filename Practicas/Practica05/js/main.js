var numero1 = prompt("Favor de ingresar un número.");
var numero2 = prompt("Favor de ingresar otro número.");

if(numero1 < numero2) {
    alert(`El numero ${numero1} es menor que el ${numero2}.`);
} else if(numero2 < numero1) {
    alert(`El numero ${numero2} es menor que el ${numero1}.`);
} else if(numero1 == numero2) {
    alert("Los números son iguales.")
}