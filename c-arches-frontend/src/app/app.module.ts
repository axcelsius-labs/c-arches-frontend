import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule here

import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Import your routes

@NgModule({
  declarations: [
    // Other components, directives, pipes
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppModule { }
