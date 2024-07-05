import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent} from "./components/footer/footer.component";
import { CardComponent } from "./components/card/card.component";
import { BackgroundComponent } from './components/background/background.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { SceneComponent } from './components/scene/scene.component';
import { MonologueComponent } from "./components/monologue/monologue.component";
import { MonologueGridComponent } from './components/monologue.grid/monologue.grid.component';
import { Chapter30Component } from './components/chapter.3.0/chapter.3.0.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    BackgroundComponent,
    DialogueComponent,
    SceneComponent,
    MonologueComponent,
    MonologueGridComponent,
    Chapter30Component
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    MonologueComponent,
    SceneComponent,
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    MonologueGridComponent,
    Chapter30Component,
  ]
})
export class SharedModule { }
