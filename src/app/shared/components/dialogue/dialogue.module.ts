import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogueComponent } from './dialogue.component';

@NgModule({
  declarations: [DialogueComponent],
  imports: [CommonModule],
  exports: [DialogueComponent],
})
export class DialogueModule {}
