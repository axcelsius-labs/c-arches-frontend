/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChapterTitleOverlayComponent } from './chapter-title-overlay.component';

describe('ChapterTitleOverlayComponent', () => {
  let component: ChapterTitleOverlayComponent;
  let fixture: ComponentFixture<ChapterTitleOverlayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChapterTitleOverlayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTitleOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
