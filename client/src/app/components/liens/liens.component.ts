import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ActiveLinkService } from '../../services/active-link.service';

@Component({
  selector: 'app-liens',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './liens.component.html',
  styleUrls: ['./liens.component.scss']
})
export class LiensComponent {

  @Input() activeLink: string = ''; // Lien actif reçu en prop
  @Output() activeLinkChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private router: Router,
    private activeLinkService: ActiveLinkService // Injection du service
  ) { }

  ngOnInit() {
    // Abonnement au service pour récupérer l'état actif
    this.activeLinkService.activeLink$.subscribe(link => {
      this.activeLink = link;
    });
  }

  setActiveLink(link: string) {
    this.activeLinkService.setActiveLink(link); // Utilise le service pour mettre à jour le lien actif
    window.scrollTo(0, 0); // Défilement immédiat en haut à gauche
    // Navigue vers le lien avec le fragment s'il est défini
    if (link === 'devis') {
      this.router.navigate(['/prestations'], { fragment: 'devis' });
    } else {
      this.router.navigate([`/${link}`]);
    }
  }
}