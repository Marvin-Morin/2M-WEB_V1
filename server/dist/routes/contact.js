"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = require("express");
// Controller du formulaire
const contact_1 = require("../controller/contact");
exports.contactRouter = (0, express_1.Router)();
// Route pour le formulaire de contact
exports.contactRouter.post("/", contact_1.contactController);
