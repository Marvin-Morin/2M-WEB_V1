import { ReseauxSociauxComponent } from "../reseaux-sociaux/reseaux-sociaux.component";
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [ReseauxSociauxComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.scss'
})
export class AProposComponent implements AfterViewInit  {

  // Utilisation de @ViewChild pour cibler des éléments spécifiques
  @ViewChild('image') imageRef!: ElementRef;
  @ViewChildren('p') paragrapheRef!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Vérification de la disponibilité des éléments avant de les observer
    if ( this.imageRef && this.paragrapheRef && this.paragrapheRef.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Arrête l'observation une fois l'animation appliquée
          }
        });
      });

      // Observer les éléments pour appliquer l'animation
      this.paragrapheRef.toArray().forEach((element) => {
        observer.observe(element.nativeElement);
      });

      // Observer les autres éléments
      observer.observe(this.imageRef.nativeElement);
    } else {
      console.error('Un ou plusieurs éléments ne sont pas disponibles pour l\'animation.');
    }
  }

}
