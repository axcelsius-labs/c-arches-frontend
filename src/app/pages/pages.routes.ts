import { Routes } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { ChapterComponent } from './chapter/chapter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProgressGuardService } from '../shared/services/progress-guard.service';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService, ProgressGuardService],
  },
  {
    path: 'chapter/:id',
    component: ChapterComponent,
    canActivate: [AuthGuardService, ProgressGuardService],
  }, //update this line
  {
    path: 'resources',
    component: ResourcesComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: 'chapter/1' },
];

export class PagesRoutingModule {}
