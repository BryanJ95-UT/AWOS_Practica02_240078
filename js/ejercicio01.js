// 1. Declaración de variables utilizando el prefijo VAR
var miNombre = "Bryan Javier";
var misApellidos;

//utilizaremos la funcion console.log para imprimir el valor actual de la variable
console.log("El valor de la variable miNombre es =", miNombre);
console.log("El valor de la variable misApellidos es =", misApellidos);
//esto arroja un undefined dado que la variable no ha sido inicializada, es decir no se le ha asignado un valor que almacenar

misApellidos = "Gonzalez Paredes";
// En este momento la variable ya tiene un valor almacenado por que al imprimirlo deberá mostrar dicho dato
console.log("El valor de la variable misApellidos es =", misApellidos);

//Para actualizar el valor de una variable previamente definida solo basta con igualar el nuevo valor 
miNombre= "Bryan Javier Actualizado";
console.log("Hola, ", miNombre, misApellidos);// ===============================
// Personalización de salidas a Consola
// ===============================
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `
  background: ${bg};
  color: white;
  border-radius: 6px;
  padding: 4px;
  font-size: 1rem;
  font-weight: bold;
`;

console.log("%c1.- Ejercicio 01: Declaración de Variables", style_console);

// ===============================
// 1. Declaración de variables con VAR
// ===============================
console.warn("-- Declaración de Variables utilizando el prefijo VAR --");

// Declaración
var miNombre = "Bryan Javier";
var misApellidos;

// Mostrar valores iniciales
console.log("El valor de la variable miNombre es =", miNombre);
console.log("El valor de la variable misApellidos es =", misApellidos); // undefined

// Asignación
misApellidos = "González Paredes";
console.log("El valor de la variable misApellidos es =", misApellidos);

// Actualización
miNombre = "Bryan Javier Actualizado";
console.log("Hola,", miNombre, misApellidos);

// ===============================
// 2. Declaración de constantes con CONST
// ===============================
console.warn("-- Declaración de Variables utilizando el prefijo CONST --");

const miMatricula = "24XXXX";
console.log("El valor actual de la constante miMatricula es:", miMatricula);

// ===============================
// 3. Declaración de variables con LET
// ===============================
console.warn("-- Declaración de Variables utilizando LET --");

let miFechaNacimiento = new Date("2006-06-08");

function calcularEdad(fechaNacimiento) {
    let fechaHoy = new Date();
    let milisegundosPorDia = 24 * 60 * 60 * 1000;
    let diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;
    let edad = Math.floor(diasVividos / 365.25);
    return edad;
}

let miEdad = calcularEdad(miFechaNacimiento);
console.log("Tu edad es:", miEdad, "años");

// ===============================
// Condicionales
// ===============================
let esMayorDeEdad;
let esMenorDeEdad;

if (miEdad >= 18) {
    esMayorDeEdad = true;
    esMenorDeEdad = false;
} else {
    esMayorDeEdad = false;
    esMenorDeEdad = true;
}

console.log(
  "Mayor de edad:", esMayorDeEdad,
  "| Menor de edad:", esMenorDeEdad
);

// ===============================
// Interpolación de datos
// ===============================
console.warn("-- Interpolación de Datos --");

console.log(
  `Hola, ${miNombre} ${misApellidos}, sé que tienes ${miEdad} años,
por lo que eres ${esMayorDeEdad ? "mayor" : "menor"} de edad.`
);
