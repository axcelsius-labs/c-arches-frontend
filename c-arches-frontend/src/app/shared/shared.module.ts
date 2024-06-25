import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './components/character/character.component';
import { BackgroundComponent } from './components/background/background.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { SceneComponent } from './components/scene/scene.component';

@NgModule({
  declarations: [CharacterComponent, BackgroundComponent, DialogueComponent, SceneComponent],
  imports: [CommonModule],
  exports: [SceneComponent]
})
export class SharedModule { }
