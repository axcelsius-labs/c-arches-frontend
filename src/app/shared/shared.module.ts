import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { BackgroundComponent } from './components/background/background.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { SceneComponent } from './components/scene/scene.component';
import { MonologueComponent } from './components/monologue/monologue.component';
import { MonologueGridComponent } from './components/monologue.grid/monologue.grid.component';
import { Chapter30Component } from './components/chapter.3.0/chapter.3.0.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MainContainerComponent } from './components/main-container/main-container.component';

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
    Chapter30Component,
    MainContainerComponent,
  ],
  imports: [CommonModule, MatIconModule, MatProgressBarModule, MatDialogModule],
  exports: [
    MonologueComponent,
    SceneComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    MonologueGridComponent,
    Chapter30Component,
    MainContainerComponent,
  ],
})
export class SharedModule {}
