import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveLinkService {

  private activeLinkSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  activeLink$ = this.activeLinkSubject.asObservable();

  constructor() { }

  setActiveLink(link: string) {
    this.activeLinkSubject.next(link); // Met à jour l'état du lien actif
  }
}
