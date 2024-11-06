"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Chargement du fichier contenent les variables d'environnements
// Importation de mon application
const app_1 = __importDefault(require("./app"));
require('dotenv').config();
// Initialisation du port pour le server
const PORT = process.env.PORT;
// Lancement du server sur le port indiqué
app_1.default.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
