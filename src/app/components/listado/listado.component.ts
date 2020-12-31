import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() heroe: any = {};

  isActive: boolean = false;
  heroes: Heroe[] = [];

  // tslint:disable-next-line:variable-name
  constructor( private _heroesService: HeroesService,
               private router: Router
              ) {
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(i){
    this.router.navigate(['/heroe', i]);
  }

}
