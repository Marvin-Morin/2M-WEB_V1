import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/contact';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements AfterViewInit {

  isLoading: boolean = false;

  @ViewChildren('fieldset') fieldsetRef!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Vérification de la disponibilité des éléments avant de les observer
    if (this.fieldsetRef && this.fieldsetRef.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Arrête l'observation une fois l'animation appliquée
          }
        });
      });

      // Observer les éléments pour appliquer l'animation
      this.fieldsetRef.toArray().forEach((element) => {
        observer.observe(element.nativeElement);
      });
    } else {
      console.error(
        "Un ou plusieurs éléments ne sont pas disponibles pour l'animation."
      );
    }
  }

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

    this.isLoading = true;

    // console.log("contactData : ", this.contactData);

    const formattedDataContact = {
      ...this.contactData, // Utilisation de l'opérateur spread pour copier les données du formulaire
    };

    // console.log("formattedDataContact : ", formattedDataContact);

    this.contactService.sendContactForm(formattedDataContact).subscribe({
      next: (response) => {
        console.log('Formulaire envoyé avec succès');
        this.submissionSuccess = true;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Erreur lors de l'envoi du formulaire", error);
        this.submissionSuccess = false;
        this.isLoading = false;
      },
    });
  }
}
