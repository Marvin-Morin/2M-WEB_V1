"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importation d'express
const express_1 = __importDefault(require("express"));
// Initialisation de router pour mon app
const router = express_1.default.Router();
// Importation des routes pour mon formulaire
const devis_1 = require("./devis");
const contact_1 = require("./contact");
// Utilisation des routes pour mon formulaire
router.use("/devis", devis_1.devisRouter);
router.use("/contact", contact_1.contactRouter);
exports.default = router;
