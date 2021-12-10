import './css/styles.css';
import { obtenerHeresArr } from './js/await';

const heroes = obtenerHeresArr();

console.table(heroes);