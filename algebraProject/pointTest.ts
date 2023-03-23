//-- Importar clases
import { Point } from "./point";

//-- Pruebas
console.log(`------------------------------------------`);
let x:number = 10;
let y:number = 7;
let punto:Point = new Point(x,y);
console.log(`Punto inicial = ${punto.toString()}`);

punto.setX(5);
punto.setY(4);
console.log(`x = ${punto.getX()}`);
console.log(`y = ${punto.getY()}`);
console.log(`Punto modificado = ${punto.toString()}`);

console.log(`------------------------------------------`);

let distPuntoOrigen:number = punto.distanceToIOrigin();
console.log(`La distancia desde (0,0) hasta ${punto.toString()} es = ${distPuntoOrigen.toFixed(2)}`);

console.log(`------------------------------------------`);

let punto2:Point = new Point(20,15);
let distPuntoPunto:number = punto.calculateDistance(punto2);
console.log(`La distancia desde ${punto.toString()} hasta ${punto2.toString()} es = ${distPuntoPunto.toFixed(2)}`);

console.log(`------------------------------------------`);