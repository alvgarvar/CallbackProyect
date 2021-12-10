import './css/styles.css';

import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

Promise.all( [buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 )] ).then( ([heroe1, heroe2]) => {
    console.log(`Enviando a ${ heroe1 } y ${ heroe2 } a la mision.`);
}).catch( err => {
    alert(err);
}).finally( () => {
    console.log("Se finalizo la ejecucion de las promesas.")
});