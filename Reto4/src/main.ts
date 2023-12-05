import { Aula } from './Aula';
import { Estudiante } from './Estudiante'
import { Profesor } from './Profesor'
import './style.css'

let alumnos:Array<Estudiante> = [new Estudiante("Juanka",21,"H",4), new Estudiante("Ainara", 33, "M", 8), new Estudiante("Marc", 31,"H",6)]
let profesor:Profesor = new Profesor("Jose Marín",30, "H","matematicas");
let aula: Aula = new Aula(1, 3, "matematicas", alumnos, profesor);

if(aula.comprobarDarClase()){
  let arrayNotas:number[] = aula.sacarNotas();
  console.log("Alumnos aprobados: " + arrayNotas[0]);
  console.log("Alumnas aprobadas: " + arrayNotas[1]);
}else{
  console.log("No se ha podido dar classe");
}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

  </div>
`
