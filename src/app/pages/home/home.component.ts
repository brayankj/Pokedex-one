import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../services/api-pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons = [];
  p: number = 1;
  constructor( private _apiPokemon : ApiPokemonService ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    for( let i = 1; i <= 150; i++ ){
      this._apiPokemon.getPokemons(i).subscribe( x => {
        this.pokemons.push( x );
        this.pokemons.sort( ( a, b ) => a.id - b.id );
      }); 
    }
  }

}
