// Importation d'express
import express from 'express';
// Initialisation de router pour mon app
const router = express.Router()


// Importation des routes pour mon formulaire
import { devisRouter } from './devis'
import { contactRouter } from './contact';

// Utilisation des routes pour mon formulaire
router.use("/devis", devisRouter)
router.use("/contact", contactRouter )


export default router;