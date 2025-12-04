import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Bootstrap } from './bootstrap/bootstrap';
import { Tailwind } from './tailwind/tailwind';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'directives', component: Directives},
  { path: 'data-binding', component: DataBinding },
  { path: 'pagenotfound', component: Pagenotfound },
  { path: 'bootstrap', component: Bootstrap },
  { path: 'tailwind', component: Tailwind }
];
