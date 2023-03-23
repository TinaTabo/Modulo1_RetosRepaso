//-- Importar clases
import { Point } from "./point";

//-- Pruebas
let x:number = 10;
let y:number = 7;
let punto:Point = new Point(x,y);
console.log(`Punto inicial = ${punto.toString()}`);

punto.setX(5);
punto.setY(4);
console.log(`x = ${punto.getX()}`);
console.log(`y = ${punto.getY()}`);

console.log(`Punto modificado = ${punto.toString()}`);

