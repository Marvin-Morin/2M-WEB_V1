import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ReseauxSociauxComponent } from "../reseaux-sociaux/reseaux-sociaux.component";
import { LiensComponent } from "../liens/liens.component";
import { ActiveLinkService } from '../../services/active-link.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ReseauxSociauxComponent, LiensComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentUrl: string = ''; // Lien actuel pour suivre l'URL

  activeLink: string = ''; // Lien actif dans le footer

  constructor(
    private router: Router,
    private activeLinkService: ActiveLinkService // Injection du service
  ) {
    // Écoute des événements de navigation pour mettre à jour l'URL active
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {
    // Abonnement au service pour récupérer l'état actif
    this.activeLinkService.activeLink$.subscribe(link => {
      this.activeLink = link;
    });
  }
}