import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { ResourcesComponent } from './resources/resources.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { ChapterComponent } from './chapter/chapter.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EndingComponent } from './ending/ending.component';

@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    EndingComponent,
    HomeComponent, 
    ResourcesComponent,
    ChapterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginComponent,
    WelcomeComponent,
    EndingComponent,
    HomeComponent, 
    ResourcesComponent,
    ChapterComponent,
  ]
})
export class PagesModule { }
