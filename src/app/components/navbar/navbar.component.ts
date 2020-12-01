import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ApiPokemonService } from '../../services/api-pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  Search: FormGroup;
  createFormGrup(){
    return new FormGroup ({ keyword : new FormControl('',[Validators.required]) });
  }

  constructor( private _apiPokemon:ApiPokemonService ) { }

  ngOnInit(): void { this.Search = this.createFormGrup(); }

  searchPokemon( keyword:any ){
    let Keyword = keyword.keyword;
    Keyword = Keyword.toLowerCase();
    if(this.Search.valid) this._apiPokemon.getPokemon(Keyword).pipe(finalize( () => this.resetInput())).subscribe();
  }

  resetInput(): void { this.Search.reset(); }

}
