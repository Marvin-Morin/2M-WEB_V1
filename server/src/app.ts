// Importation du module cors
import CORS from "cors";

// Importation d'express
import express from 'express';


// Initialisation de mon application avec Express
const app = express()

// Middleware pour parser le corps de la requête en JSON
app.use(express.json());


// BodyParser
import bodyParser from 'body-parser';

// Middleware pour parser le corps des requêtes
app.use(bodyParser.json());
// Utilise bodyParser pour traiter les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration de CORS
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  };
  app.use(CORS(corsOptions));
  
// Utilisation des routes
import router from "./routes";
app.use('/', router)


// Exportation d emon apllication
export default app