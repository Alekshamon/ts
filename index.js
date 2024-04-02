"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("os");
var chalk_1 = require("chalk");
// Récupérer les informations sur le CPU
var cpuInfo = (0, os_1.cpus)();
// Convertir les informations CPU en chaîne de caractères
var cpuInfoString = JSON.stringify(cpuInfo);
// Afficher en rouge les informations CPU
console.log(chalk_1.default.red(cpuInfoString));
