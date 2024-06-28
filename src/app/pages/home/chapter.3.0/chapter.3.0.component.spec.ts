import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter30Component } from './chapter.3.0.component';

describe('Chapter30Component', () => {
  let component: Chapter30Component;
  let fixture: ComponentFixture<Chapter30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chapter30Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chapter30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
