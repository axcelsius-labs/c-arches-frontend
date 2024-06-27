import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ResourcesComponent } from './resources/resources.component';
import { Chapter10Component} from "./chapter.1.0/chapter.1.0.component";
import { Chapter11Component } from "./chapter.1.1/chapter.1.1.component";
import { Chapter12Component } from "./chapter.1.2/chapter.1.2.component";
import { Chapter13Component} from "./chapter.1.3/chapter.1.3.component";
import { Chapter20Component } from "./chapter.2.0/chapter.2.0.component";
import { Chapter21Component } from "./chapter.2.1/chapter.2.1.component";
import { Chapter22Component } from "./chapter.2.2/chapter.2.2.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chapters/1/0', component: Chapter10Component },
  { path: 'chapters/1/1', component: Chapter11Component },
  { path: 'chapters/1/2', component: Chapter12Component },
  { path: 'chapters/1/3', component: Chapter13Component },
  { path: 'chapters/2/0', component: Chapter20Component },
  { path: 'chapters/2/1', component: Chapter21Component },
  { path: 'chapters/2/2', component: Chapter22Component },
  { path: 'resources', component: ResourcesComponent },
];

export class HomeRoutingModule { }
