import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { ResourcesComponent } from './resources/resources.component';
import { SharedModule } from '../../shared/shared.module'; // Adjust the path as needed
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent,
    Chapter1Component,
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
    Chapter1Component,
    Chapter2Component,
    ResourcesComponent,
    RouterModule
  ]
})
export class HomeModule { }
