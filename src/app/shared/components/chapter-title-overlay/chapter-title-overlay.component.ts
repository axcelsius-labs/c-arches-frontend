import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chapter-title-overlay',
  templateUrl: './chapter-title-overlay.component.html',
  styleUrls: ['./chapter-title-overlay.component.scss'],
})
export class ChapterTitleOverlayComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ChapterTitleOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public chapter: any,
  ) {
    this.chapterTitle = chapter.chapterTitle;
    this.chapterDescription = chapter.chapterDescription;
  }

  chapterTitle!: string;
  chapterDescription!: string;
  ngOnInit(): void {
    // Focus on the overlay to catch keydown events
    this.dialogRef.backdropClick().subscribe(() => this.fadeOutOverlay());
  }

  @HostListener('window:keydown.space', ['$event'])
  handleSpaceKey(event: KeyboardEvent): void {
    event.preventDefault();
    this.fadeOutOverlay();
  }

  fadeOutOverlay(): void {
    const overlayElement = document.querySelector('.chapter-title-overlay');
    if (overlayElement) {
      overlayElement.classList.add('fade-out');
      setTimeout(() => {
        this.dialogRef.close();
      }, 500); // match the transition duration in CSS
    }
  }
}
