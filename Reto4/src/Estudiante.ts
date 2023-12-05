import { Persona } from "./Persona";

export class Estudiante extends Persona implements Faltable{
    private calificacion:number;

    constructor(nombre:string, edad:number, sexo:string, calificacion:number){
        super(nombre, edad, sexo);
        this.calificacion = this.comprobarCalificacion(calificacion);
    }
    comprobarCalificacion(calificacion: number): number {
        if(calificacion > 0 && calificacion <= 10){
            return calificacion;
        }else{
            return 0;
        }
    }
    falta(): boolean {
        if(Math.floor(Math.random()*10) >= 5){
            return true;
        }
        return false;
    }

    public getCalificacion():number{
        return this.calificacion;
    }
    public setCalificacion(value: number){
        this.calificacion = value;
    }
}