import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'prestations',
    loadComponent: () =>
      import('./components/prestations/prestations.component').then(
        (m) => m.PrestationsComponent
      ),
  },
  {
    path: 'a-propos',
    loadComponent: () =>
      import('./components/a-propos/a-propos.component').then(
        (m) => m.AProposComponent
      ),
  },
  {
    path: 'galerie',
    loadComponent: () =>
      import('./components/galerie/galerie.component').then(
        (m) => m.GalerieComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'mentions-legales',
    loadComponent: () =>
      import('./components/mentions-legales/mentions-legales.component').then(
        (m) => m.MentionsLegalesComponent
      ),
  },
  {
    path: 'politique-de-confidentalite',
    loadComponent: () =>
      import(
        './components/politique-confidentalites/politique-confidentalites.component'
      ).then((m) => m.PolitiqueConfidentalitesComponent),
  },
  {
    path: 'conditions-generales-de-vente',
    loadComponent: () =>
      import('./components/cgv/cgv.component').then((m) => m.CGVComponent),
  },
  {
    path: 'politique-de-remboursement',
    loadComponent: () =>
      import(
        './components/politique-de-remboursement/politique-de-remboursement.component'
      ).then((m) => m.PolitiqueDeRemboursementComponent),
  },
];
