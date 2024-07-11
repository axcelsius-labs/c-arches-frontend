/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonologueContentComponent } from './monologue.content.component';

describe('MonologueContentComponent', () => {
  let component: MonologueContentComponent;
  let fixture: ComponentFixture<MonologueContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonologueContentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonologueContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
