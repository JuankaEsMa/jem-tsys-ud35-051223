import './style.css'
import { Raices } from './Raices'

let ecuacion = new Raices(3,5,1);

ecuacion.calcular();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

  </div>
`