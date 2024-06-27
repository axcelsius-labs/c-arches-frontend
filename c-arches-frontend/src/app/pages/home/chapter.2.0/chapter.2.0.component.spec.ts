import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter20Component } from './chapter.2.0.component';

describe('Chapter20Component', () => {
  let component: Chapter20Component;
  let fixture: ComponentFixture<Chapter20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chapter20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chapter20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
