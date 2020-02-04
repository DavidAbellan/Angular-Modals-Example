import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillToEmployeeModalComponent } from './add-skill-to-employee-modal.component';

describe('AddSkillToEmployeeModalComponent', () => {
  let component: AddSkillToEmployeeModalComponent;
  let fixture: ComponentFixture<AddSkillToEmployeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkillToEmployeeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillToEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
