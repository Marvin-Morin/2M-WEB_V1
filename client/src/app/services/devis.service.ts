import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devis } from '../interfaces/devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  private apiUrl = 'http://localhost:3000/devis';

  constructor(private http: HttpClient) { }

  submitDevis(data: any): Observable<Devis[]> {
    console.log('data service : ', data);
    return this.http.post<Devis[]>(this.apiUrl, data);
  }
}
