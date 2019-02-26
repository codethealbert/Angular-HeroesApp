import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };
  data2: any;
  nuevo: false;
  id: string;

  constructor(private _heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe( parametros => {
        console.log(parametros);
        this.id = parametros['id'];
      });
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);

    if ( this.id === 'nuevo') {
      // insertando
      this._heroesService.nuevoHeroe( this.heroe)
      .subscribe( (data) => {
        this.data2 = data;
        this.data2 = this.data2.name;
        this.router.navigate(['/heroe', this.data2]);
      },
      error => console.log(error));
    } else {
      // actualizando
      this._heroesService.actualizarHeroe( this.heroe, this.id)
      .subscribe( (data) => {
       console.log(data);
      },
      error => console.log(error));
    }

  }

}
