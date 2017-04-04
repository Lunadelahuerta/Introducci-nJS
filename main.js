/* Tipos de datos en JS
*
* Principalmente son 3:
*
* Booleans: Pueden tener solo dos valores:
* True o False.
*
* Numbers:
* Números que pertenecen a los números reales.
*
* Strings:
* Son cadenas de caracteres (nombre completo de alguien, incluyendo espacios)
*/

// // Definiendo booleans:
// var miVariableBoolean = true
// var miVariableNoolean2 = false
// console.log("Imprimiendo booleans", true, false)

// // Definiendo números
// var miNúmero = -17
// var miNúmero2 = 56
// var miNúmero3 = 8798798
// var miNúmero4 = 248723376428746237
// var miNúmeroDecimal = 0.748
// var miNúmeroDecimal2 = -7.9843
// console.log("Imprimiendo Números", miNúmero, miNúmero2, miNúmero3, miNúmero4, miNúmero5, miNúmeroDecimal, miNúmeroDecimal2)

// // Definiendo Strings
// var miString = "Mi primer string"
// var miString2 = "Pueden contener números, 2,3,4,5,6,7..."
// var miString3 = "2"
// var miNúmero5 = Number (miString3)
// var miString4 = String (miNúmeroDecimal2)
// console.log("Imprimiendo Strings", miString, miString2, miString3, miString4)
// //typeof se usa para identificar que valor tiene la variable (booleano, número o string)

// console.log("Sumar:", 1+3)
// console.log("Restar:", 1-3)
// console.log("Multiplicar:", 9 * 3)
// console.log("Dividir", 20 / 7)
// alert("Este es un mensaje")

// var suma = 5 + 5
// var MensajeParaElUsuario = "El resultado de la suma es:" + suma
// alert(MensajeParaElUsuario)

// var edad = prompt("Ingresa tu edad")
// var nombre = prompt("Ingresa tu nombre")

// console.log("La edad del usuario es:", edad)
// console.log("Hola:", nombre)
// alert("Hola" + nombre +", tienes" + edad +"años")

/**
 * Crear un programa que consulta nombre, apellido,
 * edad y que le pregunte al usuario cuántos años más quiere tener
 */

var nombre= prompt("¿Cual es tu nombre?")
var apellido= prompt("¿Cual es tu apellido?")
var edad= prompt("Cual es tu edad?")
var pesadilla= prompt("¿Cuantos años más quieres tener?")
var miEdad=Number (edad)
var miPesadilla=Number (pesadilla)

console.log ("Hola" + nombre, apellido, " te gustaría tener", miEdad + miPesadilla)