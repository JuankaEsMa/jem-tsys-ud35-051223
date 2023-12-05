
export class Libro{
    private isbn: string;
    private titulo: string;
    private autor: string;
    private numPags: number;

    constructor(isbn: string, titulo: string, autor: string, numPags: number){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPags = numPags;
    }

    public getIsbn():string{
        return this.isbn;
    }
    public getTitulo():string{
        return this.titulo;
    }
    public getAutor():string{
        return this.autor;
    }
    public getNumPags():number{
        return this.numPags;
    }
    public setIsbn(isbn:string){
        this.isbn = isbn;
    }
    public setTitulo(titulo:string){
        this.titulo = titulo;
    }
    public setAutor(autor:string){
        this.autor = autor;
    }
    public setNumPags(numPags:number){
        this.numPags = numPags;
    }
    public toString = () : string => {
        return "El libro" + this.titulo + " con ISBN " + this.isbn + " creado por el autor " + this.autor + " tiene " + this.numPags + " páginas" ;
    }
}