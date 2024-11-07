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