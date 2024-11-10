import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent {

  // Utilisation de @ViewChild pour cibler des éléments spécifiques
  @ViewChildren('item') itemRefRef!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Vérification de la disponibilité des éléments avant de les observer
    if (this.itemRefRef && this.itemRefRef.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Arrête l'observation une fois l'animation appliquée
          }
        });
      });

      // Observer les éléments pour appliquer l'animation
      this.itemRefRef.toArray().forEach((element) => {
        observer.observe(element.nativeElement);
      });

    } else {
      console.error('Un ou plusieurs éléments ne sont pas disponibles pour l\'animation.');
    }
  }

  images = [
    './img/galerie/projet_Marvin_Morin1.png',
    './img/galerie/projet_Marvin_Morin2.png',
    './img/galerie/projet_Marvin_Morin3.png',
    './img/galerie/projet_Marvin_Morin4.png',
    './img/galerie/projet_Marvin_Morin5.png',
    './img/galerie/projet_Marvin_Morin6.png',
    './img/galerie/projet_Marvin_Morin7.png',
  ];

  descriptions = [
    'Formulaire de contact',
    'Site WordPress IMTS',
    `Intégration d'une maquette`,
    `Intégration d'une maquette`,
    `Intégration d'une maquette`,
    `Site de test Frontend Mentor`,
    `Connexion d'une API meteo`
  ]

  selectedImage: string | null = null;

  openModal(image: string): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
