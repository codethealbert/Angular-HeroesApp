import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = 'https://heroesapp-e703e.firebaseio.com/heroes.json';
  heroeURL = 'https://heroesapp-e703e.firebaseio.com/heroes/';
  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'applecation/json'
    });

    return this.http.post( this.heroesURL, body, { headers })
      .pipe(map( resp => {
        console.log(resp);
        return resp;
      }));
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'applecation/json'
    });

    const url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.put( url, body, { headers })
      .pipe(map( resp => {
        console.log(resp);
        return resp;
      }));
  }

  getHeroe ( key$: string) {
    const url = `${this.heroeURL}/${key$}.json`;
    return this.http.get(url)
              .pipe(map( resp => resp));
  }

  getHeroes () {
    return this.http.get(this.heroesURL)
              .pipe(map( resp => resp));
  }

  borraHeroe(key$: string) {
    const url = `${this.heroeURL}/${key$}.json`;
    return this.http.delete(url)
      .pipe(map(res => res));
  }

}
