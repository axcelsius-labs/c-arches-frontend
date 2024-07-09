import { Routes } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { ChapterComponent } from './chapter/chapter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'chapter/:id',
    component: ChapterComponent,
    canActivate: [AuthGuardService],
  }, //update this line
  {
    path: 'resources',
    component: ResourcesComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: 'chapter/1' },
];

export class PagesRoutingModule {}
