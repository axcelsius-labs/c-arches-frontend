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
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ChapterTitleOverlayComponent } from './components/chapter-title-overlay/chapter-title-overlay.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MonologueContentComponent } from './components/monologue.content/monologue.content.component';

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
    MainContainerComponent,
    ChapterTitleOverlayComponent,
    ProgressBarComponent,
    MonologueContentComponent,
  ],
  imports: [CommonModule, MatIconModule, MatProgressBarModule, MatDialogModule],
  exports: [
    MonologueComponent,
    SceneComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    MonologueGridComponent,
    MainContainerComponent,
    ChapterTitleOverlayComponent,
    ProgressBarComponent,
    MonologueContentComponent,
  ],
})
export class SharedModule {}
