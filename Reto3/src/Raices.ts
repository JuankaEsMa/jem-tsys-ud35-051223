export class Raices{
    private a:number;
    private b:number;
    private c:number;

    constructor(a:number, b:number, c:number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getDiscriminante():number{
        return (Math.pow(this.b,2)-4*this.a*this.c);
    }

    tieneRaices():boolean{
        return this.getDiscriminante()>=0;
    }
    tieneRaiz():boolean{
        return this.getDiscriminante() == 0;
    }
    calcular():void{
        if(this.tieneRaiz()){
            this.obtenerRaiz();
        }else if(this.tieneRaices()){
            this.obtenerRaices();
        }else{
            console.log("La ecuación no tiene solución");
        }
    }
    obtenerRaiz():void{
        console.log("Solución: " + ((-1*this.b) * Math.sqrt(this.getDiscriminante()))/2*this.a); 
    }
    obtenerRaices():void{
        console.log("Solución 1: " + ((-1*this.b) * Math.sqrt(this.getDiscriminante()))/2*this.a)
        console.log("Solución 2: " + (this.b * Math.sqrt(this.getDiscriminante()))/2*this.a)
    }
    
}