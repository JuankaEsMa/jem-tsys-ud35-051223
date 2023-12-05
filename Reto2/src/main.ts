import './style.css'
import { Libro } from './Libro';

let libro1 = new Libro("123456789", "Harry Potter y la piedra filosofal", "JK.Rowling", 300);
let libro2 = new Libro("987654321", "Code clean", "Robert C. Martin", 500);

if(libro1.getNumPags() > libro2.getNumPags()){
  console.log(libro1.getTitulo() + " Tiene más páginas que " + libro2.getTitulo());
}else if(libro2.getNumPags > libro1.getNumPags){
  console.log(libro2.getTitulo() + " Tiene más páginas que " + libro1.getTitulo());
}else{
  console.log(libro1.getTitulo() + " Tiene la misma cantidad que " + libro2.getTitulo());
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

  </div>
`
