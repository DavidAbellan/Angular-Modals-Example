import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeToSkillComponent } from './add-employee-to-skill.component';

describe('AddEmployeeToSkillComponent', () => {
  let component: AddEmployeeToSkillComponent;
  let fixture: ComponentFixture<AddEmployeeToSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeToSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeToSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
