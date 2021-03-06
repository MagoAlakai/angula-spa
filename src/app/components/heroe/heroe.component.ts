import { Heroe } from './../../services/heroes.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router
              ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params.id);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {

  }

  /*ngDoCheck(): void {
    this.router.navigate(['/heroe']);
  }*/

  verEditarHeroe(): void{
    const editor: HTMLDivElement = (document.getElementById('editarHeroe') as HTMLDivElement);
    editor.classList.remove('d-none');
  }

  editarHeroe(editarNombre: string): void{
    console.log(this.heroe);
    if (editarNombre === ''){
      alert(`No has introducido ningún nombre`);
    }else{
      this.heroe.nombre = editarNombre;
      const editor: HTMLDivElement = (document.getElementById('editarHeroe') as HTMLDivElement);
      editor.classList.add('d-none');
      alert(`Has cambiado el nombre de este héroe a ${this.heroe.nombre}`);
    }
  }


}
