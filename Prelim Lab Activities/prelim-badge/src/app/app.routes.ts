import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { PartnersComponent } from './partners/partners';
import { AboutComponent } from './about/about';
import { JoinUsComponent } from './join-us/join-us';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join', component: JoinUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
