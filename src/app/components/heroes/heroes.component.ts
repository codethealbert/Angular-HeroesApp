import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;
  loading = true;

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes()
      .subscribe( data => {
        // console.log(data);
        this.heroes = data;
        this.loading = false;
       /*  setTimeout( () => {
          this.loading = false;
          this.heroes = data;
        }, 2000); */
      });
  }

  ngOnInit() {
  }

  borraHeroe(key$: string) {
    this._heroesService.borraHeroe(key$)
      .subscribe( respuesta => {
        if (respuesta ) {
          console.error(respuesta);
        } else {
          // todo bien
          // para borrar un dato de un arreglo seria con splice
          // para borrar de un objeto
          delete this.heroes[key$];
        }

      });
  }

}
