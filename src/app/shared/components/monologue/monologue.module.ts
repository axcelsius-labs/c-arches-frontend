import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogueModule } from '../dialogue/dialogue.module';
import { AdditionalContentComponent } from './components/additional-content/additional-content.component';
import { GridOptionsComponent } from './components/grid-options/grid-options.component';
import { LargeScreenComponent } from './components/large-screen/large-screen.component';
import { OptionContentComponent } from './components/option-content/option-content.component';
import { SmallScreenComponent } from './components/small-screen/small-screen.component';
import { MonologueComponent } from './monologue.component';

@NgModule({
  declarations: [
    AdditionalContentComponent,
    GridOptionsComponent,
    LargeScreenComponent,
    SmallScreenComponent,
    OptionContentComponent,
    MonologueComponent,
  ],
  imports: [CommonModule, DialogueModule],
  exports: [MonologueComponent],
})
export class MonologueModule {}
