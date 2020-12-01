import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.scss']
})
export class TarjetaPokemonComponent implements OnInit {

  @Input() pokemons:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
