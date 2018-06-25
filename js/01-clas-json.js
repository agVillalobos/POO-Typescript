
var bicicleta = {
    color:'Rojo',
    modelo:'BMX',
    frenos:'de disco',
    cambiaColor: function(nuevo_color){
        // bicicleta.color = nuevo_color;
        this.color = nuevo_color;
    }
};

bicicleta.cambiaColor("Azul");

console.log(bicicleta);