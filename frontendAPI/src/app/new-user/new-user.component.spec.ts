import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUSerComponent } from './new-user.component';

describe('NewUSerComponent', () => {
  let component: NewUSerComponent;
  let fixture: ComponentFixture<NewUSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
