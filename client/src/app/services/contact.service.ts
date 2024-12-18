import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})


export class ContactService {

  private apiUrl = 'https://2m-web.fr/contact';

  constructor(private http: HttpClient) {}

  sendContactForm(formDataContact: any): Observable<Contact[]> {
    console.log('formDataContact : ', formDataContact);
    return this.http.post<Contact[]>(this.apiUrl, formDataContact);
  }
}