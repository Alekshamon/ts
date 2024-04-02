import { cpus } from 'os';
const chalk = require('chalk');

// Récupérer les informations sur le CPU
const cpuInfo = cpus();

// Convertir les informations CPU en chaîne de caractères
const cpuInfoString = JSON.stringify(cpuInfo);

// Afficher en rouge les informations CPU
console.log(chalk.red(cpuInfoString));
