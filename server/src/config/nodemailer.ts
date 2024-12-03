import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  requireTLS: true,  
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass:  process.env.EMAIL_PASSWORD, 
  },
});



export default transporter;