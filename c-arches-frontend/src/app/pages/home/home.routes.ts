import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ResourcesComponent } from './resources/resources.component';
import { Chapter10Component } from "./chapter.1.0/chapter.1.0.component";
import { Chapter11Component } from "./chapter.1.1/chapter.1.1.component";
import { Chapter12Component} from "./chapter.1.2/chapter.1.2.component";
import { Chapter2Component } from './chapter2/chapter2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chapters/1/0', component: Chapter10Component },
  { path: 'chapters/1/1', component: Chapter11Component },
  { path: 'chapters/1/2', component: Chapter12Component },
  { path: 'chapters/2/0', component: Chapter2Component },
  { path: 'resources', component: ResourcesComponent },
];

export class HomeRoutingModule { }
