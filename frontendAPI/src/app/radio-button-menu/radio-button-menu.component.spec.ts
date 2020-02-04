import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonMenuComponent } from './radio-button-menu.component';

describe('RadioButtonMenuComponent', () => {
  let component: RadioButtonMenuComponent;
  let fixture: ComponentFixture<RadioButtonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
