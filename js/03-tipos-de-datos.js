var cadena1 = "some";
//string
var cadena = "some";
cadena = 3;
//number
var numero = 12;
//boleano
var verdadero_false = true;
//Any
var cualquiera = "hola";
cualquiera = 42;
//Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = [12, 13, 14];
console.log(cadena, numero, verdadero_false, cualquiera, lenguajes, cadena1);
//Let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero, numero2);
