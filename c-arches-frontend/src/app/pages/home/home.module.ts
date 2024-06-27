import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home.component';
import { IntroComponent } from "./intro/intro.component";
import { Chapter10Component} from "./chapter.1.0/chapter.1.0.component";
import { Chapter11Component } from "./chapter.1.1/chapter.1.1.component";
import { Chapter12Component } from "./chapter.1.2/chapter.1.2.component";
import { Chapter13Component} from "./chapter.1.3/chapter.1.3.component";
import { Chapter20Component } from "./chapter.2.0/chapter.2.0.component";
import { Chapter21Component } from "./chapter.2.1/chapter.2.1.component";
import { Chapter22Component } from "./chapter.2.2/chapter.2.2.component";
import { ResourcesComponent } from './resources/resources.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    IntroComponent,
    Chapter10Component,
    Chapter11Component,
    Chapter12Component,
    Chapter13Component,
    Chapter20Component,
    Chapter21Component,
    Chapter22Component,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    IntroComponent,
    Chapter10Component,
    Chapter11Component,
    Chapter12Component,
    Chapter13Component,
    Chapter20Component,
    Chapter21Component,
    Chapter22Component,
    ResourcesComponent,
    RouterModule
  ]
})
export class HomeModule { }
