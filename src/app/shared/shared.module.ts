import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent} from "./components/footer/footer.component";
import { CardComponent } from "./components/card/card.component";
import { BackgroundComponent } from './components/background/background.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { SceneComponent } from './components/scene/scene.component';
import { MonologueComponent } from "./components/monologue/monologue.component";
import { Chapter21Component } from './components/chapter.2.1/chapter.2.1.component';
import { Chapter30Component } from './components/chapter.3.0/chapter.3.0.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    BackgroundComponent,
    DialogueComponent,
    SceneComponent,
    MonologueComponent,
    Chapter21Component,
    Chapter30Component
  ],
  imports: [CommonModule],
  exports: [
    MonologueComponent,
    SceneComponent,
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    Chapter21Component,
    Chapter30Component
  ]
})
export class SharedModule { }
