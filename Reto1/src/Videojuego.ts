export
class Videojuego implements Entregable{
    private titulo:string;
    private horasEstimadas: number;
    private entregado:boolean = false;
    private genero: string;
    private compañia: string;
    

    constructor(titulo:string = "", horasEstimadas:number = 10, genero:string = "", compañia:string = ""){
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.genero = genero;
        this.compañia = compañia;
    }
    entregar(): void {
        this.entregado = true;
    }
    devolver(): void {
        this.entregado = false;
    }
    isEntregado(): boolean {
        return this.entregado;
    }
    compareTo(object: Object): number {
        if((object as Videojuego).getHorasEstimadas() > this.getHorasEstimadas()){
            return -1;
        }else if((object as Videojuego).getHorasEstimadas() < this.getHorasEstimadas()){
            return 1;
        }else{
            return 0;
        }
    }

    public getTitulo():string{
        return this.titulo;
    }
    public setTitulo(titulo:string){
        this.titulo = titulo;
    }
    public getHorasEstimadas(): number {
        return this.horasEstimadas;
    }
    public setHorasEstimadas(value: number) {
        this.horasEstimadas = value;
    }
    public getGenero(): string {
        return this.genero;
    }
    public setGenero(value: string) {
        this.genero = value;
    }
    public getCompañia(): string {
        return this.compañia;
    }
    public setCompañia(value: string) {
        this.compañia = value;
    }
    public toString = () : string => {
        return "Titulo: " + this.titulo + " Horas estimadas: " + this.horasEstimadas + " Genero: " + this.genero + " Compañía: " + this.compañia ;
    }
}