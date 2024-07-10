import { Routes } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { ChapterComponent } from './chapter/chapter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EndingComponent } from './ending/ending.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'chapter/:id',
    component: ChapterComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'ending',
    component: EndingComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'resources',
    component: ResourcesComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: 'welcome' },
];

export class PagesRoutingModule {}
