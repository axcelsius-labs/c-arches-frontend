import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter22Component } from './chapter.2.2.component';

describe('Chapter22Component', () => {
  let component: Chapter22Component;
  let fixture: ComponentFixture<Chapter22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chapter22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chapter22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
