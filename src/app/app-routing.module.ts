import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: Error404Component }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes);
