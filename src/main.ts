import './style.css';

// Creamos la interfaz
interface GrupoMusical {
  nombre: string;
  año: number;
  activo: boolean;
  generoMusical: string;
}

// Definimos los distintos grupos
const grupo1: GrupoMusical = {
  nombre: '%cThe Beatles',
  año: 1960,
  activo: true,
  generoMusical: '🎵Pop Rock',
};
const grupo2: GrupoMusical = {
  nombre: '%cQueen',
  año: 1970,
  activo: false,
  generoMusical: '🎸Rock',
};
const grupo3: GrupoMusical = {
  nombre: '%cAC DC',
  año: 1973,
  activo: true,
  generoMusical: '🤘Hard Rock',
};
const grupo4: GrupoMusical = {
  nombre: '%cLudwig van Beethoven',
  año: 1770,
  activo: false,
  generoMusical: '🎼Clásica',
};
const grupo5: GrupoMusical = {
  nombre: '%cThe Rolling Stones',
  año: 1962,
  activo: true,
  generoMusical: '🎸Rock',
};
// Definimos estilo del título
const estiloTitulo = 'font-weight:bold; background-color:#00FF00; font-size:20px';

//Mostramos por consola todos los grupos
console.log(grupo1.nombre, estiloTitulo);
console.log('Año fundación: ' + grupo1.año);
console.log('Activo: ' + grupo1.activo);
console.log('Género musical: ' + grupo1.generoMusical);

console.log('--------------------------');

console.log(grupo2.nombre, estiloTitulo);
console.log('Año fundación: ' + grupo2.año);
console.log('Activo: ' + grupo2.activo);
console.log('Género musical: ' + grupo2.generoMusical);

console.log('--------------------------');

console.log(grupo3.nombre, estiloTitulo);
console.log('Año fundación: ' + grupo3.año);
console.log('Activo: ' + grupo3.activo);
console.log('Género musical: ' + grupo3.generoMusical);

console.log('--------------------------');

console.log(grupo4.nombre, estiloTitulo);
console.log('Año fundación: ' + grupo4.año);
console.log('Activo: ' + grupo4.activo);
console.log('Género musical: ' + grupo4.generoMusical);

console.log('--------------------------');

console.log(grupo5.nombre, estiloTitulo);
console.log('Año fundación: ' + grupo5.año);
console.log('Activo: ' + grupo5.activo);
console.log('Género musical: ' + grupo5.generoMusical);
