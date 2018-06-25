
//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
//Agrega funcionalidad extra.
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

//Clase(molde del objeto)
// @estampar('Gucci')
class Camiseta1 implements CamisetaBase{
    //Propiedades(caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodos(funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

class Sudadera extends Camiseta1{
    public cabucha: boolean;
    setCapucha(capucha:boolean){
        this.cabucha = capucha;
    }
    getCapucha(){return this.getCapucha;}
}


var camiseta = new Camiseta1("rojo","modelo1","nike","L",30);
camiseta.setColor("Rojo");
// camiseta.estampacion();

console.log(camiseta);
console.log(camiseta.getColor());


var sudadera_nile = new Sudadera("rojo","modelo1","nike","L",30);
sudadera_nile.setCapucha(true);
console.log(sudadera_nile);