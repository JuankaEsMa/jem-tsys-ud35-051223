export class Persona{
    protected nombre: string;
    protected edad: number;
    protected sexo: "H" | "M";

    constructor(nombre:string, edad:number, sexo:string){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = this.comprobarSexo(sexo);
    }
    private comprobarSexo(sexo:string):"H"|"M"{
        if(sexo == "H" ||sexo == "M"){
            return sexo;
        }else{
            return "H";
        }
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(value: string) {
        this.nombre = value;
    }
    public getEdad(): number {
        return this.edad;
    }
    public setEdad(value: number) {
        this.edad = value;
    }
    public getSexo(): "H" | "M" {
        return this.sexo;
    }
    public setSexo(value: "H" | "M") {
        this.sexo = value;
    }
}