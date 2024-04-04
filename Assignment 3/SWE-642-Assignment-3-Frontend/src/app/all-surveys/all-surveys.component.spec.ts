// 1. Sree Charitha Meka – G01410061
// 2. Nagasumukh Hunsur Dinesh - G01394230

// all-surveys.component.spec.ts
// Description: Unit tests for the all-surveys component.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSurveysComponent } from './all-surveys.component';

describe('AllSurveysComponent', () => {
  let component: AllSurveysComponent;
  let fixture: ComponentFixture<AllSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSurveysComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
