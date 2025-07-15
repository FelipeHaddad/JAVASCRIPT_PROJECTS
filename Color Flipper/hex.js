export function alteradorDeCorHex()  {
  let cor = '#'
  const listaHex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  
  for (let i = 1; i <= 6; i++) {
    let elemento = listaHex[Math.floor(Math.random() * listaHex.length)]
    cor += elemento
  }
  return cor;
}