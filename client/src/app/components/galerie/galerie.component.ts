import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent {

  images = [
    'img/galerie/projet_Marvin_Morin1.png',
    'img/galerie/projet_Marvin_Morin2.png',
    'img/galerie/projet_Marvin_Morin3.png',
    'img/galerie/projet_Marvin_Morin4.png',
    'img/galerie/projet_Marvin_Morin5.png',
    'img/galerie/projet_Marvin_Morin6.png',
    'img/galerie/projet_Marvin_Morin7.png',
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
