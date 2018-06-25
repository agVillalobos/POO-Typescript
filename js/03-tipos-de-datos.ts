
type letrasonumeros = string | number;

let cadena1: letrasonumeros ="some";

//string
let cadena: string | number ="some";
cadena = 3;

//number
let numero: number =12;

//boleano
let verdadero_false: boolean=true;

//Any
let cualquiera: any ="hola";
cualquiera = 42;

//Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

let years: number[] = [12,13,14];

console.log(cadena, numero, verdadero_false, cualquiera, lenguajes,cadena1);


//Let vs var

var numero1 = 10;
var numero2 = 12;

if(numero1==10){
    let numero1 = 44;
    var numero2=55;
    console.log(numero1,numero2);
}

console.log(numero,numero2);