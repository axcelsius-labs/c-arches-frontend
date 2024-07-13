import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { CardComponent } from './components/card/card.component';
import { BackgroundComponent } from './components/background/background.component';
import { SceneComponent } from './components/scene/scene.component';
import { MonologueComponent } from './components/monologue/monologue.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ChapterTitleOverlayComponent } from './components/chapter-title-overlay/chapter-title-overlay.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MonologueModule } from './components/monologue/monologue.module';
import { DialogueModule } from './components/dialogue/dialogue.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    CardComponent,
    BackgroundComponent,
    SceneComponent,
    MainContainerComponent,
    ChapterTitleOverlayComponent,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDialogModule,
    MonologueModule,
    DialogueModule,
  ],
  exports: [
    MonologueComponent,
    SceneComponent,
    CopyrightComponent,
    MainContainerComponent,
    CardComponent,
  ],
})
export class SharedModule {}
