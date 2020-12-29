import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroefiltrado',
  templateUrl: './heroefiltrado.component.html',
  styleUrls: ['./heroefiltrado.component.css']
})
export class HeroefiltradoComponent implements OnInit {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
              ) {
    this.activatedRoute.params.subscribe( params =>{
      this.heroe = this._heroesService.getHeroefil( params.id);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {

  }

}
