import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ResourcesComponent } from './resources/resources.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chapter1', component: Chapter1Component },
  { path: 'chapter2', component: Chapter2Component },
  { path: 'resources', component: ResourcesComponent },
];

export class HomeRoutingModule { }
