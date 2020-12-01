import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { TarjetaPokemonComponent } from './tarjeta-pokemon/tarjeta-pokemon.component';


@NgModule({
  declarations: [
    NavbarComponent, 
    TarjetaPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    TarjetaPokemonComponent
  ]
})
export class ComponentsModule { }
