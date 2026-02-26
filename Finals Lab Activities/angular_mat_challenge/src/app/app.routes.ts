import { Membership } from './membership/membership';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'membership', component: Membership },
  { path: '', redirectTo: '/membership', pathMatch: 'full' }
];
