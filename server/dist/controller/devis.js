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
exports.formulaireController = void 0;
const nodemailer_1 = __importDefault(require("../config/nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const formulaireController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Destructuration des champs reçus dans la requête, avec des valeurs par défaut pour les champs non spécifiés.
        // Cela permet de gérer les cas où certains champs ne sont pas fournis par l'utilisateur.
        const { name = "Non spécifié", company = "Non spécifié", email = "Non spécifié", phone = "Non spécifié", site_type = {}, page_count = "Non spécifié", features = {}, product_count = "Non spécifié", payment_options = {}, other_payment = "Non spécifié", delivery_options = {}, stock_management = "Non spécifié", design = {}, options = {}, message = "Non spécifié", } = req.body;
        // console.log("req body controller: ", req.body);
        // Validation des champs requis
        if (!name && !email && !phone) {
            res.status(400).json({
                message: "Veuillez remplir tous les champs obligatoires : nom, email, et téléphone.",
            });
            return; // Arrête l'exécution si les champs requis sont manquants
        }
        // Transformation des objets en chaînes de caractères lisibles.
        // Objectif : Les options sélectionnées sont transformées en chaînes lisibles pour être affichées dans l'email.
        // Utilisation de `Object.entries` pour récupérer uniquement les options cochées et les formater sous forme de liste.
        const selectedSiteTypes = Object.entries(site_type)
            // Filtrer pour garder uniquement les options sélectionnées (true).
            .filter(([key, value]) => value === true)
            // Remplacement des tirets par des espaces pour un affichage plus propre.
            .map(([key]) => key.replace(/-/g, " "))
            // Concatenation en une seule chaîne, ou "Non spécifié" si aucune option.
            .join(", ") || "Non spécifié";
        // console.log("selectedSiteTypes : ", selectedSiteTypes);
        const selectedFeatures = Object.entries(features)
            .filter(([key, value]) => value === true)
            .map(([key]) => key.replace(/-/g, " "))
            .join(", ") || "Non spécifié";
        // console.log("selectedFeatures : ", selectedFeatures);
        const selectedpaymentOptions = Object.entries(payment_options)
            .filter(([key, value]) => value === true)
            .map(([key]) => key.replace(/-/g, " "))
            .join(", ") || "Non spécifié";
        const selectedDesign = Object.entries(design)
            .filter(([key, value]) => value === true)
            .map(([key]) => key.replace(/-/g, " "))
            .join(", ") || "Non spécifié";
        // console.log("selectedDesign : ", selectedDesign);
        const selecteddeliveryOptions = Object.entries(delivery_options)
            .filter(([key, value]) => value === true)
            .map(([key]) => key.replace(/-/g, " "))
            .join(", ") || "Non spécifié";
        // console.log("selecteddeliveryOptions : ", selecteddeliveryOptions);
        const selectedOptions = Object.entries(options)
            .filter(([key, value]) => value === true)
            .map(([key]) => key.replace(/-/g, " "))
            .join(", ") || "Non spécifié";
        console.log("selectedOptions : ", selectedOptions);
        // Options de l'email
        // Configuration des options pour l'email, en utilisant les informations récupérées dans `req.body`.
        // Objectif : Envoi d'un email avec les informations du formulaire de demande de devis.
        yield nodemailer_1.default.sendMail({
            from: email,
            to: process.env.EMAIL_ADDRESS,
            subject: "Demande de devis",
            text: `Demande de devis :

    Nom: ${name}

    Email: ${email}

    Phone: ${phone}

    Entreprise: 
    ${company || "Non spécifiée"}

    Pages souhaitées : 
    ${page_count || "Non spécifié"}

    Fonctionnalités additionnelles : 
    ${selectedFeatures || "Non spécifié"}

    Pour les Sites E-commerce :

    Nombre de produits initiaux : 
    ${product_count || "Non spécifié"}

    Options de paiement : 
    ${selectedpaymentOptions || "Non spécifié"}

    Autre option de paiement :
    ${other_payment || "Non spécifié"}

    Options de livraison : 
    ${selecteddeliveryOptions || "Non spécifié"}
    
    Gestion des stocks : 
    ${stock_management || "Non spécifié"}

    
    Type de site internet :
    ${selectedSiteTypes || "Non spécifié"}

    Design ? :
    ${selectedDesign || "Non spécifié"}

    Options :
    ${selectedOptions || "Non spécifié"}

    Message: 
    ${message}
`,
            html: `
    <div style="font-family: Arial, sans-serif; color: #333;">

        <h2 style="color: #0056b3;">Demande de devis</h2>
        
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Entreprise :</strong> ${company || "Non spécifiée"}</p>
        
        <hr style="border-top: 1px solid #ccc;">
        
        <h3 style="color: #0056b3;">Pages souhaitées</h3>
        <p>${page_count || "Non spécifié"}</p>
        
        <hr style="border-top: 1px solid #ccc;">
        
        <h3 style="color: #0056b3;">Fonctionnalités additionnelles</h3>
        <ul>${selectedFeatures || "<li>Non spécifié</li>"}</ul>
        
        <hr style="border-top: 1px solid #ccc;">
        
        <h3 style="color: #0056b3;">Type de site internet</h3>
        <ul>${selectedSiteTypes || "<li>Non spécifié</li>"}</ul>
        
        <hr style="border-top: 1px solid #ccc;">
        
        <h3 style="color: #0056b3;">Pour les Sites E-commerce</h3>
        
        <h4>Nombre de produits initiaux</h4>
        <p>${product_count || "Non spécifié"}</p>
        
        <h4>Options de paiement</h4>
        <ul>${selectedpaymentOptions || "<li>Non spécifié</li>"}</ul>
        
        <h4>Autre option de paiement</h4>
        <ul>${other_payment || "<li>Non spécifié</li>"}</ul>

        <h4>Options de livraison</h4>
        <ul>${selecteddeliveryOptions || "<li>Non spécifié</li>"}</ul>
        
        <h4>Gestion des stocks</h4>
        <p>${stock_management || "Non spécifié"}</p>
        
        <hr style="border-top: 1px solid #ccc;">
        
        <h3 style="color: #0056b3;">Design et Identité Visuelle</h3>
        <ul>${selectedDesign || "<li>Aucune identité visuelle précisée</li>"}</ul>
        
        <hr style="border-top: 1px solid #ccc;">

        <h3 style="color: #0056b3;">Options</h3>
        <p>${selectedOptions || "Aucune options choisis"}</p>
        
        
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
exports.formulaireController = formulaireController;
