var numero1 = prompt("Favor de ingresar un número.");
var numero2 = prompt("Favor de ingresar otro número.");
var numero3 = prompt("Favor de ingresar otro número.");

if((numero1 > numero2) && (numero1 > numero3)) {
    alert(`El numero ${numero1} es mayor que el ${numero2} y el número ${numero3}.`);
} else if((numero2 > numero1) && (numero2 > numero3)) {
    alert(`El numero ${numero2} es mayor que el ${numero1} y el número ${numero3}.`);
} else if((numero3 > numero1) && (numero3 > numero2)) {
    alert(`El numero ${numero3} es mayor que el ${numero1} y el número ${numero2}.`);
} else if(numero1 == numero2 && numero2 == numero3) {
    alert("Los números son iguales.")
}