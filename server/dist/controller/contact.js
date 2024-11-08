"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
const nodemailer_1 = __importDefault(require("../config/nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const contactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name = "Non spécifié", firstName = "Non spécifié", email = "Non spécifié", phone = null, company = "Non spécifié", object = "Non spécifié", message = "Non spécifié", } = req.body;
        // Validation des champs requis
        if (!name || !firstName || !email || !message) {
            res.status(400).json({ message: "Veuillez renseigner tous les champs obligatoires" });
            return; // Arrête l'exécution si les champs requis sont manquants
        }
        // Configurer l'email avec les informations du formulaire
        yield nodemailer_1.default.sendMail({
            from: email,
            to: process.env.EMAIL_ADDRESS, // Destinataire de l'email (vous)
            subject: `Contact : ${object}`, // Objet de l'email
            text: `Nouveau message de contact du site pro :

      Nom : ${name}
      Prénom : ${firstName}
      Email : ${email}
      Téléphone : ${phone || "Non spécifié"}
      Entreprise : ${company || "Non spécifiée"}

      Objet : ${object}
      
      Message :
      ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #0056b3;">Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Prénom :</strong> ${firstName}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || "Non spécifié"}</p>
          <p><strong>Entreprise :</strong> ${company || "Non spécifiée"}</p>
          <h3 style="color: #0056b3;">Objet</h3>
          <p>${object}</p>
          <h3 style="color: #0056b3;">Message</h3>
          <p>${message}</p>
        </div>
      `,
        });
        res.status(200).json({ message: "Email envoyé avec succès" });
    }
    catch (error) {
        console.error("Erreur lors de l'envoi de l'email : ", error);
        res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
    }
});
exports.contactController = contactController;
