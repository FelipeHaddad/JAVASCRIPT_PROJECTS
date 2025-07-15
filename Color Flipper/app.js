import { alteradorDeCorHex } from "./hex.js"

const botao = document.getElementById('botaoClickMe');
const color = document.querySelector('.corDinamica');
let resultado = '#ffffff'

botao.addEventListener("click", () => {
  resultado = `${alteradorDeCorHex()}`;
  document.body.style.backgroundColor = `${resultado}`;
  color.textContent = resultado
});