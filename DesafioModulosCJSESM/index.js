
// index.js

import { acelerar, mostrarDadosVeiculo } from './lib/Veiculo.js';
import fs from './lib/módulos.cjs';

// Usar as funções exportadas de veiculo.js
console.log(acelerar(60));
console.log(mostrarDadosVeiculo('Ford', 'Mustang', 'Ford Motor Company'));

