import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillToProjectComponent } from './add-skill-to-project.component';

describe('AddSkillToProjectComponent', () => {
  let component: AddSkillToProjectComponent;
  let fixture: ComponentFixture<AddSkillToProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkillToProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
