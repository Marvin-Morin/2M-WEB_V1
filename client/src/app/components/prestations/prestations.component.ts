import { DevisService } from '../../services/devis.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import du FormsModule
import { Devis } from '../../interfaces/devis';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveLinkService } from '../../services/active-link.service';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss'],
})
export class PrestationsComponent implements AfterViewInit {
  activeLink: string = '';
  isLoading: boolean = false;
  private subscription: Subscription = new Subscription(); // Initialisation de l'abonnement

  // Injection du service pour gérer la soumission du formulaire
  constructor(
    private devisService: DevisService,
    private routes: ActivatedRoute,
    private activeLinkService: ActiveLinkService
  ) {}

  ngOnInit() {
    this.subscription = this.activeLinkService.activeLink$.subscribe((link) => {
      this.activeLink = link;
    });
  }

  private fragmentSubscription: Subscription | null = null;

  // Utilisation de @ViewChild pour cibler des éléments spécifiques
  @ViewChildren('prestation') prestationsRefs!: QueryList<ElementRef>;
  @ViewChildren('fieldset') fieldsetRef!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    });

    this.prestationsRefs.forEach((element) => {
      observer.observe(element.nativeElement);
    });
    this.fieldsetRef.forEach((element) => {
      observer.observe(element.nativeElement);
    });

    // Subscribe to route fragment only once
    this.fragmentSubscription = this.routes.fragment.subscribe((fragment) => {
      if (fragment) {
        const target = document.getElementById(fragment);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Unsubscribe after first scroll to prevent repetitive scroll
      if (this.fragmentSubscription) {
        this.fragmentSubscription.unsubscribe();
      }
    });
  }

  // Cleanup if necessary when component is destroyed
  ngOnDestroy() {
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
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
      blog: false,
      portfolio: false,
      faq: false,
      booking: false,
      catalog: false,
    },

    // Nombre de produits pour le site e-commerce
    product_count: null,

    // Options de paiement pour le site e-commerce
    payment_options: {
      'payment-card': false,
      paypal: false,
      stripe: false,
    },

    // Option pour un moyen de paiement spécifique
    other_payment: '',

    // Options de livraison pour le site e-commerce
    delivery_options: {
      'delivery-national': false,
      'delivery-international': false,
      pickup: false,
    },

    // Gestion des stocks (si nécessaire pour un site e-commerce)
    stock_management: '',

    // Options d'identité visuelle pour le site (si nécessaire)
    design: {
      'graphic-charter': false, // Charte graphique fournie
      'visual-advice': false, // Besoin de recommandations visuelles ou d’exemples de sites pour s’inspirer (Je ne fait aucune maquette ou design)
    },

    options: {
      SEO: false,
      'web-semantique': false,
    },

    // Champ pour un message personnalisé de l'utilisateur
    message: '',
  };

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    this.isLoading = true;

    const formattedData = {
      ...this.formData, // Utilisation de l'opérateur spread pour copier les données du formulaire
      payment_options: this.formData.payment_options, // Sélection des options de paiement
      delivery_options: this.formData.delivery_options, // Sélection des options de livraison
      design: this.formData.design, // Sélection des options de design
      options: this.formData.options, // Sélection des options des options
    };

    console.log(formattedData);

    // Appel du service pour soumettre le formulaire et gérer la réponse
    this.devisService.submitDevis(formattedData).subscribe({
      next: (response) => {
        console.log('Email envoyé avec succès!'); // Confirmation d'un envoi réussi
        this.isSubmitted = true; // Indicateur de succès
        this.hasError = false; // Pas d'erreur rencontrée
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Erreur lors de l'envoi de l'email", error); // Gestion des erreurs en cas d'échec d'envoi
        this.hasError = true; // Indicateur d'erreur
        this.isSubmitted = false; // Réinitialisation de l'état de soumission
        this.isLoading = false;
      },
    });
  }
}
