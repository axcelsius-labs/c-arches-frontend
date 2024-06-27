import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Chapter10Component} from "./chapter.1.0/chapter.1.0.component";
import { Chapter11Component } from "./chapter.1.1/chapter.1.1.component";
import { Chapter12Component } from "./chapter.1.2/chapter.1.2.component";
import { Chapter2Component } from './chapter2/chapter2.component';
import { ResourcesComponent } from './resources/resources.component';
import { SharedModule } from '../../shared/shared.module'; // Adjust the path as needed
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent,
    Chapter10Component,
    Chapter11Component,
    Chapter12Component,
    Chapter2Component,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent,
    Chapter10Component,
    Chapter11Component,
    Chapter12Component,
    Chapter2Component,
    ResourcesComponent,
    RouterModule
  ]
})
export class HomeModule { }
