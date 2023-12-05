import { Persona } from "./Persona";

export class Profesor extends Persona implements Faltable{
    private materia: "matematicas"|"filosofía"|"física";

    constructor(nombre:string, edad:number, sexo:string, materia:string){
        super(nombre, edad, sexo);
        this.materia = this.comprobarMateria(materia);
    }
    public comprobarMateria(materia:string):"matematicas"|"filosofía"|"física"{
        if(materia == "matematicas" || materia == "filosofía" ||materia == "física"){
            return materia;
        }else{
            return "matematicas";
        }
    }
    public getMateria(): string {
        return this.materia;
    }
    public setMateria(value: string) {
        this.materia = this.comprobarMateria(value);
    }
    falta(): boolean {
        if(Math.floor(Math.random()*5) == 0){
            return true;
        }
        return false;
    }
    
}