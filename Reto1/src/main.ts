import './style.css'
import { Videojuego } from './Videojuego'
import { Serie } from './Serie'
let arrayVideojuegos:Array<Videojuego> = [
  new Videojuego(),
  new Videojuego("Backpack battle", 80),
  new Videojuego("The last of us", 80, "Acción", "Naughty dogs"),
  new Videojuego("Dark souls 3", 200, "Aventura"),
  new Videojuego("Age of empires", 400, "Simulador")
]
let arraySeries:Array<Serie> = [
  new Serie(),
  new Serie("Como conocí a vuestra madre", 9,"sitcom"),
  new Serie("Friends", 6, "sitcom"),
  new Serie("Breaking bad"),
  new Serie("Doctor who", 39, "Sci-fi")
]
let contadorVideojuegos:number = 0;
let contadorSerie:number = 0;
let videojuegoMayor: Videojuego = arrayVideojuegos[0];
let serieMayor: Serie = arraySeries[0];
for (let i = 0; i < arrayVideojuegos.length; i++) {
  if(i%2 == 0){
    arraySeries[i].entregar();
    arrayVideojuegos[i].entregar();
  }
  if(arraySeries[i].isEntregado()){
    contadorSerie++;
  }
  if(arrayVideojuegos[i].isEntregado()){
    contadorVideojuegos++;
  }  
  if(videojuegoMayor.compareTo(arrayVideojuegos[i]) == -1){
    videojuegoMayor = arrayVideojuegos[i];
  }
  if(serieMayor.compareTo(arraySeries[i]) == -1){
    serieMayor = arraySeries[i];
  }
}
console.log("Series Entregados: " + contadorSerie);
console.log("Videojuegos Entregados: " + contadorVideojuegos);
console.log("Serie con más temporadas: " + serieMayor.toString());
console.log("Videjuego con más horas estimadas: " + videojuegoMayor.toString());

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

  </div>
`