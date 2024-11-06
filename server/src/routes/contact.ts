import express from "express";
import { Router } from 'express';
// Controller du formulaire
import { contactController } from "../controller/contact";



export const contactRouter = Router()


// Route pour le formulaire de contact
contactRouter.post("/", contactController);