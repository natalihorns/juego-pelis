/*function mostrarPeli(peliculas){
    
    return peliculas[Math.floor(Math.random()*peliculas.length)]
}
let peliculas = ['Sopa de gemelas', 'Terminator','El padrino','La guerra de las galaxias','Tiburón','El club de la pelea',
'Tiempos violentos','Cantando bajo la lluvia','Apocalipsis ahora','Volver al futuro','El Señor de los Anillos','Duro de matar',
'Lo que el viento se llevó','The Matrix','La lista de Schindler','E.T','Titanic','Rocky','Los cazafantasmas','Cuenta conmigo','Thelma & Louise','El silencio de los inocentes',
'Forrest Gump','El renacido','El joven manos de tijera','Mi pobre angelito','El pianista','El rey leon',];

document.write (mostrarPeli(peliculas));*/

const palabras =  ['Sopa de gemelas', 'Terminator','El padrino','La guerra de las galaxias','Tiburón','El club de la pelea',
'Tiempos violentos','Cantando bajo la lluvia','Apocalipsis ahora','Volver al futuro','El Señor de los Anillos','Duro de matar',
'Lo que el viento se llevó','The Matrix','La lista de Schindler','E.T','Titanic','Rocky','Los cazafantasmas','Cuenta conmigo','Thelma & Louise','El silencio de los inocentes',
'Forrest Gump','El renacido','El joven manos de tijera','Mi pobre angelito','El pianista','El rey leon',];

const generarPalabra = () => {
  const indice = Math.floor(Math.random() * palabras.length);
  const palabra = palabras[indice];
  document.getElementById("palabra").textContent = palabra;
};

document.getElementById("generar-btn").addEventListener("click", generarPalabra);
