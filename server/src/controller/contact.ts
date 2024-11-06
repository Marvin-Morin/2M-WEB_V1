// controllers/contactController.ts
import { Request, Response } from "express";
import transporter from "../config/nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const contactController = async (
  req: Request,
  res: Response
): Promise<void> => {



  try {
    const {
      name = "Non spécifié",
      firstName = "Non spécifié",
      email = "Non spécifié",
      phone = null,
      company = "Non spécifié",
      object = "Non spécifié",
      message = "Non spécifié",
    } = req.body;

    // Validation des champs requis
    if( !name || !firstName || !email || !message) {
      res.status(400).json({ message: "Veuillez renseigner tous les champs obligatoires" });
      return; // Arrête l'exécution si les champs requis sont manquants
    }

    // Configurer l'email avec les informations du formulaire
    await transporter.sendMail({
      
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
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email : ", error);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
  }
};