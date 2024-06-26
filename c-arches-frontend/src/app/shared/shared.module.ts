import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './components/character/character.component';
import { HeaderComponent } from "./components/header/header.component";
import { BackgroundComponent } from './components/background/background.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { SceneComponent } from './components/scene/scene.component';

@NgModule({
  declarations: [CharacterComponent, HeaderComponent, BackgroundComponent, DialogueComponent, SceneComponent],
  imports: [CommonModule],
  exports: [SceneComponent, HeaderComponent]
})
export class SharedModule { }
