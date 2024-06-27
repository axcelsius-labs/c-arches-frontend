import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './components/character/character.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent} from "./components/footer/footer.component";
import { CardComponent } from "./components/card/card.component";
import { BackgroundComponent } from './components/background/background.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { SceneComponent } from './components/scene/scene.component';
import { MonologueComponent } from "./components/monologue/monologue.component";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    CharacterComponent, 
    HeaderComponent,
    FooterComponent,
    CardComponent,
    BackgroundComponent,
    DialogueComponent,
    SceneComponent,
    MonologueComponent,
  ],
  imports: [CommonModule],
  exports: [
    MonologueComponent,
    SceneComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }
