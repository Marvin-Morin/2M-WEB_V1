import { Component } from '@angular/core';
import { ReseauxSociauxComponent } from "../reseaux-sociaux/reseaux-sociaux.component";

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [ReseauxSociauxComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.scss'
})
export class AProposComponent {

}
