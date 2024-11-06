"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importation du module cors
const cors_1 = __importDefault(require("cors"));
// Importation d'express
const express_1 = __importDefault(require("express"));
// Initialisation de mon application avec Express
const app = (0, express_1.default)();
// Middleware pour parser le corps de la requête en JSON
app.use(express_1.default.json());
// BodyParser
const body_parser_1 = __importDefault(require("body-parser"));
// Middleware pour parser le corps des requêtes
app.use(body_parser_1.default.json());
// Utilise bodyParser pour traiter les données du formulaire
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Configuration de CORS
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};
app.use((0, cors_1.default)(corsOptions));
// Utilisation des routes
const routes_1 = __importDefault(require("./routes"));
app.use('/', routes_1.default);
// Exportation d emon apllication
exports.default = app;
