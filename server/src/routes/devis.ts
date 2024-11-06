import express from "express";
import { Router } from 'express';
// Controller du formulaire
import { formulaireController } from "../controller/devis";

export const devisRouter = Router()
// Route pour le formulaire de contact
devisRouter.post("/", formulaireController);