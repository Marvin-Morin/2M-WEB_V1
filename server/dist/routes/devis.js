"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devisRouter = void 0;
const express_1 = require("express");
// Controller du formulaire
const devis_1 = require("../controller/devis");
exports.devisRouter = (0, express_1.Router)();
// Route pour le formulaire de contact
exports.devisRouter.post("/", devis_1.formulaireController);
