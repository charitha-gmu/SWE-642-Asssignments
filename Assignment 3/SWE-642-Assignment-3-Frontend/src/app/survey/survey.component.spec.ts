// 1. Sree Charitha Meka – G01410061
// 2. Nagasumukh Hunsur Dinesh - G01394230

// survey.component.spec.ts
// Description: Unit tests for the survey component.

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
