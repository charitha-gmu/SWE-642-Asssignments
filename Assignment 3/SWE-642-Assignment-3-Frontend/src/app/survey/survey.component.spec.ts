// survey.component.spec.ts
// Description: Unit tests for the survey component.
// Teammates: Mary Ashwitha Gopu - G01408743, Venkata Sree Divya Kasturi - G01411963.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyComponent } from './survey.component';

describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
