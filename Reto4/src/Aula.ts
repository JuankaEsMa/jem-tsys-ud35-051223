import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";

export class Aula{
    private id:number;
    private numMaxEstudiantes: number;
    private materia: "matematicas"|"filosofía"|"física";
    private alumnos:Array<Estudiante>
    private profesor:Profesor;

    constructor(id:number, numMaxEstudiantes:number, materia:string, alumnos:Array<Estudiante>, profesor:Profesor){
        this.id = id;
        this.numMaxEstudiantes = numMaxEstudiantes;
        this.materia = this.comprobarMateria(materia);
        this.alumnos = alumnos;
        this.profesor = profesor
    }
    public comprobarMateria(materia:string):"matematicas"|"filosofía"|"física"{
        if(materia == "matematicas" || materia == "filosofía" ||materia == "física"){
            return materia;
        }else{
            return "matematicas";
        }
    }
    public comprobarProfesor():boolean{
        if(this.profesor.getMateria() != this.getMateria() || this.profesor.falta()){
            return false;
        }else{
            return true;
        }
    }
    comprobarAlumnos(){
        let contadorFaltas = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            if(this.alumnos[i].falta()){
                contadorFaltas++;
            }
        }
        if((this.alumnos.length - contadorFaltas) >= this.alumnos.length/2){
            return true;
        }else{
            return false;
        }
    }
    sacarNotas():Array<number>{
        let contadorAlumnosAprobados = 0;
        let contadorAlumnasAprobadas = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            if(this.alumnos[i].getCalificacion() >= 5){
                if(this.alumnos[i].getSexo() == "H"){
                    contadorAlumnosAprobados++
                }else{
                    contadorAlumnasAprobadas++;
                }
            }
        }
        return [contadorAlumnosAprobados, contadorAlumnasAprobadas];
    }

    comprobarDarClase():boolean{
        let comprobacion:boolean =this.comprobarAlumnos() && this.comprobarProfesor();
        if(comprobacion){
            return true;
        }
        return false;
    }
    public getId():number{
        return this.id;
    }
    public setId(value: number){
        this.id = value;
    }
    public getNumMaxEstudiantes():number{
        return this.numMaxEstudiantes;
    }
    public setNumMaxEstudiantes(value: number){
        this.numMaxEstudiantes = value;
    }
    public getMateria():string{
        return this.materia;
    }
    public setMateria(value: string){
        this.materia = this.comprobarMateria(value);
    }
    public getAlumno():Array<Estudiante>{
        return this.alumnos;
    }
    public setAlumno(value: Array<Estudiante>){
        this.alumnos = value;
    }
}