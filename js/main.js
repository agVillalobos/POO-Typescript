"use strict";
exports.__esModule = true;
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion JS cargada!!");
    }
    Main.prototype.getCamiseta = function () {
        return new camiseta_1.Camiseta1("rojo", "modelo1", "nike", "L", 30);
    };
    return Main;
}());
var main = new Main();
