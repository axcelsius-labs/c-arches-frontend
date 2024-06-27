import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter21Component } from './chapter.2.1.component';

describe('Chapter21Component', () => {
  let component: Chapter21Component;
  let fixture: ComponentFixture<Chapter21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chapter21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chapter21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
