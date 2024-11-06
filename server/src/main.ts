// Chargement du fichier contenent les variables d'environnements
// Importation de mon application
import app from "./app";
require('dotenv').config()


// Initialisation du port pour le server
const PORT = process.env.PORT

// Lancement du server sur le port indiqué
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
});