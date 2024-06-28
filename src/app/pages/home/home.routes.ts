import { Routes } from '@angular/router';

import { AuthGuardService } from "../../shared/services/auth-guard.service";

import { LoginComponent} from "./login/login.component";
import { HomeComponent } from './home.component';
import { IntroComponent } from "./intro/intro.component";
import { ResourcesComponent } from './resources/resources.component';
import { Chapter10Component} from "./chapter.1.0/chapter.1.0.component";
import { Chapter11Component } from "./chapter.1.1/chapter.1.1.component";
import { Chapter12Component } from "./chapter.1.2/chapter.1.2.component";
import { Chapter13Component} from "./chapter.1.3/chapter.1.3.component";
import { Chapter20Component } from "./chapter.2.0/chapter.2.0.component";
import { Chapter21Component } from "./chapter.2.1/chapter.2.1.component";
import { Chapter22Component } from "./chapter.2.2/chapter.2.2.component";
import { Chapter30Component } from "./chapter.3.0/chapter.3.0.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'intro', component: IntroComponent, canActivate: [AuthGuardService] },
  { path: 'chapters/1/0', component: Chapter10Component, canActivate: [AuthGuardService] },
  { path: 'chapters/1/1', component: Chapter11Component, canActivate: [AuthGuardService] },
  { path: 'chapters/1/2', component: Chapter12Component, canActivate: [AuthGuardService] },
  { path: 'chapters/1/3', component: Chapter13Component, canActivate: [AuthGuardService] },
  { path: 'chapters/2/0', component: Chapter20Component, canActivate: [AuthGuardService] },
  { path: 'chapters/2/1', component: Chapter21Component, canActivate: [AuthGuardService] },
  { path: 'chapters/2/2', component: Chapter22Component, canActivate: [AuthGuardService] },
  { path: 'chapters/3/0', component: Chapter30Component, canActivate: [AuthGuardService] },
  { path: 'resources', component: ResourcesComponent, canActivate: [AuthGuardService] },
];

export class HomeRoutingModule { }
