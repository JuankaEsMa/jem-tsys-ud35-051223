export
class Serie implements Entregable{
    private titulo:string;
    private nuneroTemporadas:number;
    private entregado:boolean = false;
    private genero:string;
    private creador: string;

    constructor(titulo:string = "", numeroTemporadas:number = 3, genero:string = "", creador:string = ""){
        this.titulo = titulo;
        this.nuneroTemporadas = numeroTemporadas;
        this.genero = genero;
        this.creador = creador;
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
        if((object as Serie).getNumeroTemporadas() > this.getNumeroTemporadas()){
            return -1;
        }else if((object as Serie).getNumeroTemporadas() < this.getNumeroTemporadas()){
            return 1;
        }else{
            return 0;
        }

    }

    public getTitulo():string{
        return this.titulo;
    }
    public getNumeroTemporadas():number{
        return this.nuneroTemporadas;
    }
    public getGenero():string{
        return this.genero;
    }
    public getCreador():string{
        return this.creador;
    }
    
    public setTitulo(titulo:string){
        this.titulo = titulo;
    }
    public setNumeroTemporadas(temporadas:number){
        this.nuneroTemporadas = temporadas;
    }
    public setGenero(genero:string){
        this.genero = genero;
    }
    public setCreador(creador:string){
        this.creador = creador;
    }
    public toString = () : string => {
        return "Titulo: " + this.titulo + " Numero Temporadas: " + this.nuneroTemporadas + " Genero: " + this.genero + " Creador: " + this.creador ;
    }
}