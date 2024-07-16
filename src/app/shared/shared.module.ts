import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BackgroundComponent } from './components/background/background.component';
import { CardComponent } from './components/card/card.component';
import { ChapterTitleOverlayComponent } from './components/chapter-title-overlay/chapter-title-overlay.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { DialogueModule } from './components/dialogue/dialogue.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { MonologueComponent } from './components/monologue/monologue.component';
import { MonologueModule } from './components/monologue/monologue.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { SceneComponent } from './components/scene/scene.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    CardComponent,
    ResourceListComponent,
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
    ResourceListComponent,
  ],
})
export class SharedModule {}
