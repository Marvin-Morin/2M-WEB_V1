import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  // Utilisation de @ViewChild pour cibler des éléments spécifiques
  @ViewChild('titre') titrteRef!: ElementRef;
  @ViewChild('presentation') presentationRef!: ElementRef;
  @ViewChild('liste') listRef!: ElementRef;
  @ViewChild('carousel') carouselRef!: ElementRef;

  images: string[] = [
    '/img/diplomes/CCP5.png',
    '/img/diplomes/CCP2.png',
  ];

  currentIndex: number = 0;

  ngAfterViewInit() {
    // Vérification de la disponibilité des éléments avant de les observer
    if (this.presentationRef && this.listRef && this.carouselRef) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Arrête l'observation une fois l'animation appliquée
          }
        });
      });

      // Observer les éléments pour appliquer l'animation
      observer.observe(this.titrteRef.nativeElement);
      observer.observe(this.presentationRef.nativeElement);
      observer.observe(this.listRef.nativeElement);
      observer.observe(this.carouselRef.nativeElement);
    } else {
      console.error('Un ou plusieurs éléments ne sont pas disponibles pour l\'animation.');
    }
  }

  // Fonctions pour le carrousel
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex += 1;
    }
  }

  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
