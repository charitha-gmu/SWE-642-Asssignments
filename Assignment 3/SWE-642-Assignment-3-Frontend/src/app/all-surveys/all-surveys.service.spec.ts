// all-surveys.service.spec.ts
// Description: Unit tests for the all-surveys service.
// Teammates: Mary Ashwitha Gopu - G01408743, Venkata Sree Divya Kasturi - G01411963.

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { AllSurveysComponent } from './all-surveys.component';
import { AllSurveysService } from './all-surveys.service';

describe('AllSurveysComponent', () => {
  let component: AllSurveysComponent;
  let fixture: ComponentFixture<AllSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllSurveysComponent],
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule to imports
      providers: [AllSurveysService], // Provide the service
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
