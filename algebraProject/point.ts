//-- Clases
export class Point{
    //-- Atributos
    private x: number;
    private y: number;

    //-- Constructor
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    //-- getters y setters
    getX():number{
        return this.x;
    }

    setX(x:number){
        this.x = x;
    }

    getY():number{
        return this.y;
    }

    setY(y:number){
        this.y = y;
    }

    //-- Métodos
    toString():string{
        return `(${this.x},${this.y})`;
    }
}