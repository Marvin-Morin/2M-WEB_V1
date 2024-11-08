import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LiensComponent } from "./components/liens/liens.component";
import { ActiveLinkService } from './services/active-link.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent, CommonModule, LiensComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  menuOpen = false;

  activeLink: string = ''; // Initialise le lien actif

  constructor(
    private renderer: Renderer2,
    private el: ElementRef, // Accède à l'élément DOM
    private router: Router,
    private activeLinkService: ActiveLinkService // Injection du service
  ) { }

  setActiveLink(link: string) {
    this.activeLinkService.setActiveLink(link); // Utilise le service pour mettre à jour le lien actif
    // Navigue vers le lien avec le fragment s'il est défini
    if (link === 'devis') {
      this.router.navigate(['/prestations'], { fragment: 'devis' });
    } else {
      this.router.navigate([`/${link}`]);
    }
  }

  ngOnInit(): void {
    // Écoute l'événement 'load' lorsque la page est complètement chargée
    window.addEventListener('load', () => {
      const loadingDiv = this.el.nativeElement.querySelector('.loadingDiv');
      if (loadingDiv) {
        this.renderer.setStyle(loadingDiv, 'display', 'none');  // Masque le GIF de chargement
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
    console.log('menuOpen : ', this.menuOpen);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const trail = this.renderer.createElement('span');
    this.renderer.addClass(trail, 'trail');

    // Utilise les coordonnées globales (pageX, pageY) pour que la trace suive la souris même en défilement
    this.renderer.setStyle(trail, 'top', `${event.pageY}px`);
    this.renderer.setStyle(trail, 'left', `${event.pageX}px`);

    // Ajoute la trace au corps du document
    this.renderer.appendChild(document.body, trail);

    // Supprime la trace après la fin de l'animation
    setTimeout(() => {
      this.renderer.removeChild(document.body, trail);
    }, 600); // Doit correspondre à la durée de l'animation de fadeOut
  }
}