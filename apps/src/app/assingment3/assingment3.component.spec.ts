import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assingment3Component } from './assingment3.component';

describe('Assingment3Component', () => {
  let component: Assingment3Component;
  let fixture: ComponentFixture<Assingment3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assingment3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assingment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
