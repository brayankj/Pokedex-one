import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { APP_ROUTES } from '../app-routing.module';

import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [HomeComponent, Error404Component],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxPaginationModule,
    APP_ROUTES
  ]
})
export class PagesModule { }
