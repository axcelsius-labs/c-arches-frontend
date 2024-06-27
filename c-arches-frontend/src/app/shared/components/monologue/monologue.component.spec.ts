import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonologueComponent } from './monologue.component';

describe('MonologueComponent', () => {
  let component: MonologueComponent;
  let fixture: ComponentFixture<MonologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonologueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
