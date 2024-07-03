import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonologueGridComponent } from './monologueGridComponent';

describe('Chapter21Component', () => {
  let component: MonologueGridComponent;
  let fixture: ComponentFixture<MonologueGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonologueGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonologueGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
