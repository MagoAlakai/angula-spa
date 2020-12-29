import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  heroe: Heroe;
  termino: any;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService:HeroesService,
               private router: Router,
               ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(params.termino);
      console.log(params.termino);
    });
  }

  verHeroefil(index: number): void{
    this.router.navigate(['/heroefil', index]);
  }
}
