import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeToProjectModalComponent } from './add-employee-to-project-modal.component';

describe('AddEmployeeToProjectModalComponent', () => {
  let component: AddEmployeeToProjectModalComponent;
  let fixture: ComponentFixture<AddEmployeeToProjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeToProjectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeToProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
