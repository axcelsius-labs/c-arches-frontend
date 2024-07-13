/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OptionContentComponent } from './option-content.component';

describe('OptionContentComponent', () => {
  let component: OptionContentComponent;
  let fixture: ComponentFixture<OptionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
