import { Component } from '@angular/core';
import { ReseauxSociauxComponent } from "../reseaux-sociaux/reseaux-sociaux.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReseauxSociauxComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
