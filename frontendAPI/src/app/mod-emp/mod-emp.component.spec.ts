import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEmpComponent } from './mod-emp.component';

describe('ModEmpComponent', () => {
  let component: ModEmpComponent;
  let fixture: ComponentFixture<ModEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
