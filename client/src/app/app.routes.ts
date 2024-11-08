import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrestationsComponent } from './components/prestations/prestations.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {path: 'prestations', component: PrestationsComponent },

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









/* 

import { PrestationsComponent } from './components/prestations/prestations.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { ContactComponent } from './components/contact/contact.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentalitesComponent } from './components/politique-confidentalites/politique-confidentalites.component';
import { CGVComponent } from './components/cgv/cgv.component';
import { PolitiqueDeRemboursementComponent } from './components/politique-de-remboursement/politique-de-remboursement.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'prestations', component: PrestationsComponent },
    {path: 'A-propos', component: AProposComponent},
    {path: 'galerie', component: GalerieComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'mentions-legales', component: MentionsLegalesComponent},
    {path: 'politique-de-confidentalite', component: PolitiqueConfidentalitesComponent},
    {path: 'conditions-generales-de-vente', component: CGVComponent},
    {path: 'politique-de-remboursement', component: PolitiqueDeRemboursementComponent}
];

*/