import { DevisService } from '../../services/devis.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import du FormsModule
import { Devis } from '../../interfaces/devis';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss'],
})
export class PrestationsComponent implements AfterViewInit {

  // Utilisation de @ViewChild pour cibler des éléments spécifiques
  @ViewChildren('prestation') prestationsRefs!: QueryList<ElementRef>;
  @ViewChildren('fieldset') fieldsetRef!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Vérification de la disponibilité des éléments avant de les observer
    if (this.prestationsRefs && this.prestationsRefs.length > 0 && this.fieldsetRef && this.fieldsetRef.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Arrête l'observation une fois l'animation appliquée
          }
        });
      });

      // Observer les éléments pour appliquer l'animation
      this.prestationsRefs.toArray().forEach((element) => {
        observer.observe(element.nativeElement);
      });

      this.fieldsetRef.toArray().forEach((element) => {
        observer.observe(element.nativeElement);
      })

    } else {
      console.error('Un ou plusieurs éléments ne sont pas disponibles pour l\'animation.');
    }
  }

  // Propriétés pour gérer l'état du formulaire
  isSubmitted: boolean = false; // Indique si le formulaire a été soumis
  hasError: boolean = false; // Indique si une erreur s'est produite lors de l'envoi



  // Initialisation des données du formulaire
  formData: Devis = {
    name: '',
    company: '',
    email: '',
    phone: null,

    site_type: {
      'site-vitrine': false,
      'site-complet': false,
      'site-ecommerce': false,
      'site-wordpress': false,
    },

    // Nombre de pages souhaitées pour le site
    page_count: null,

    // Fonctionnalités / pages souhaitées pour le site
    features: {
      'contact-form': false,
      'blog': false,
      'portfolio': false,
      'faq': false,
      'booking': false,
      'catalog': false,
    },

    // Nombre de produits pour le site e-commerce
    product_count: null,

    // Options de paiement pour le site e-commerce
    payment_options: {
      'payment-card': false,
      'paypal': false,
      'stripe': false,
    },

    // Option pour un moyen de paiement spécifique
    other_payment: '',

    // Options de livraison pour le site e-commerce
    delivery_options: {
      'delivery-national': false,
      'delivery-international': false,
      'pickup': false,
    },

    // Gestion des stocks (si nécessaire pour un site e-commerce)
    stock_management: '',

    // Options d'identité visuelle pour le site (si nécessaire)
    design: {
      'graphic-charter': false, // Charte graphique fournie
      'visual-advice': false, // Besoin de recommandations visuelles ou d’exemples de sites pour s’inspirer (Je ne fait aucune maquette ou design)
    },

    // Champ pour un message personnalisé de l'utilisateur
    message: '',
  };



  // Injection du service pour gérer la soumission du formulaire
  constructor(private devisService: DevisService) { }



  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {

    const formattedData = {
      ...this.formData, // Utilisation de l'opérateur spread pour copier les données du formulaire
      payment_options: this.formData.payment_options, // Sélection des options de paiement
      delivery_options: this.formData.delivery_options, // Sélection des options de livraison
      design: this.formData.design, // Sélection des options de design
    };

    // console.log(formattedData);



    // Appel du service pour soumettre le formulaire et gérer la réponse
    this.devisService.submitDevis(formattedData).subscribe({
      next: (response) => {
        console.log('Email envoyé avec succès!'); // Confirmation d'un envoi réussi
        this.isSubmitted = true; // Indicateur de succès
        this.hasError = false; // Pas d'erreur rencontrée
      },
      error: (error) => {
        console.error("Erreur lors de l'envoi de l'email", error); // Gestion des erreurs en cas d'échec d'envoi
        this.hasError = true; // Indicateur d'erreur
        this.isSubmitted = false; // Réinitialisation de l'état de soumission
      },
    });
  }
}
