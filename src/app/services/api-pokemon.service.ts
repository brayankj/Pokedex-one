import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { modelPokemon } from '../models/pokemon';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  url:string = 'https://pokeapi.co/api/v2';
  constructor(
    private _https : HttpClient
  ) { }

  getPokemons(index:number){
    return this._https.get(`${ this.url }/pokemon/${ index }`).pipe(map(
      ( res:any ) => {
        let newPoke:modelPokemon = {
          name : res.name,
          id: res.id,
          base_experience: res.base_experience,
          height: res.height,
          weight: res.weight,
          sprites: res.sprites,
          types: res.types[0].type.name,
        }
        return newPoke;
      }
    ));
  }

  getPokemon( keyword:any ){
    return this._https.get(`${ this.url }/pokemon/${ keyword }`).pipe(
      map( (res:any) => {
        let newPoke:modelPokemon = {
          name : res.name,
          id: res.id,
          base_experience: res.base_experience,
          height: res.height,
          weight: res.weight,
          sprites: res.sprites,
          types: res.types[0].type.name,
        }
        return newPoke;
      }),
      catchError( err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The keyword was not found try another name or id, example "Pikachu"',
        });
        return throwError( err );
    }),tap( res => {
      let { name } = res;
      name = name.toUpperCase();
      Swal.fire({
        title: name,
        imageUrl: res.sprites.front_default,
        html: `
          <p>Number Pokedex: ${res.id}</p>
          <p><small>Power: ${res.base_experience}</small></p>
          <p><small>Height: ${ res.height }</small></p>
          <p><small>Weight: ${ res.weight }</small></p>`,
        imageWidth: 120,
        imageHeight: 120,
        imageAlt: res.sprites.front_default,
      })
    })
    );
  }

}
