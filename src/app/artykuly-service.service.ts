import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Artykul } from './Artykul';

@Injectable({
  providedIn: 'root'
})
export class ArtykulyServiceService {

  private artykul: Artykul[];

constructor() {
    this.artykul = [
      {
        kolejny: 1,
        name: 'Karma dla psa worek 20kg',
        price: '70 zł',
        vat: '23%',
        amount: 100,
      },
      {
        kolejny: 2,
        name: 'Karma dla kota worek 20kg',
        price: '80 zł',
        vat: '23%',
        amount: 69
      },
      {
        kolejny: 3,
        name: 'Królik miniaturka',
        price: '40 zł',
        vat: '8%',
        amount: 6
      },
      {
        kolejny: 4,
        name: 'Chomik syryjski',
        price: '50 zł',
        vat: '8%',
        amount: 4
      }
    ];
   }

  getArtykuly(): Observable<Artykul[]> {
    return of(this.artykul);
  }
  addArtykul(artykul: Artykul): void {
    this.artykul.push(artykul);
  }
}
