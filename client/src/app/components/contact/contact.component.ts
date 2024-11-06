import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/contact';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReseauxSociauxComponent } from "../reseaux-sociaux/reseaux-sociaux.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReseauxSociauxComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})



export class ContactComponent {

  contactData: Contact = {
    name: '',
    firstName: '',
    email: '',
    phone: null,
    company: '',
    object: '',
    message: '',
  };
  

  submissionSuccess: boolean | null = null;

  constructor(private contactService: ContactService) {}

  onSubmit() {

    // console.log("contactData : ", this.contactData);
    

    const formattedDataContact = {
      ...this.contactData, // Utilisation de l'opérateur spread pour copier les données du formulaire
    };

    // console.log("formattedDataContact : ", formattedDataContact);
    

    this.contactService.sendContactForm(formattedDataContact).subscribe({
      next: (response) => {
        console.log('Formulaire envoyé avec succès');
        this.submissionSuccess = true;
      },
      error: (error) => {
        console.error("Erreur lors de l'envoi du formulaire", error);
        this.submissionSuccess = false;
      },
    });
  }
}
