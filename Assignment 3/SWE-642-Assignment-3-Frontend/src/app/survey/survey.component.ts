// 1. Sree Charitha Meka – G01410061
// 2. Nagasumukh Hunsur Dinesh - G01394230

// survey.component.ts
// Description: TypeScript logic for the survey component.

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestcallService } from '../restcall.service';
import { Model } from '../model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent {
  @ViewChild('surveyForm') surveyForm!: NgForm;
  isUpdateMode = false; // Flag to determine if the form is in update mode
  updatingSurveyId: number | null = null; // Track the ID of the survey being updated

  count = 0;
  obj: any;
  selectedItemsList = [{}];
  checkedIDs = [];
  selectedItemsString = '';
  checkboxesDataList = [
    {
      label: 'Students',
      isChecked: false,
    },
    {
      label: 'Location',
      isChecked: false,
    },
    {
      label: 'Campus',
      isChecked: false,
    },
    {
      label: 'Atmosphere',
      isChecked: false,
    },
    {
      label: 'Dorm Rooms',
      isChecked: false,
    },
    {
      label: 'Sports',
      isChecked: false,
    },
  ];

  constructor(private restcallService: RestcallService) {}

  model: Model = new Model();

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked;
    });
  }

  submitSurvey() {
    console.log('Model Data:', this.model);

    this.fetchSelectedItems();
    for (let i of this.selectedItemsList) {
      this.obj = this.selectedItemsList[this.count];
      this.selectedItemsString += this.obj.label + ', ';
      this.count++;
    }

    this.model.likedMost = this.selectedItemsString.slice(0, -2);

    if (this.isUpdateMode) {
      // Update mode: Send update request
      if (this.updatingSurveyId !== null) {
        this.restcallService
          .update(this.updatingSurveyId, this.model)
          .subscribe(
            (response) => {
              console.log('Survey updated successfully!', response);
              alert('Survey updated successfully! ');
              this.resetForm();
            },
            (error) => {
              console.error('Error updating survey:', error);
              alert('Error in updating the survey. Please check and resubmit');
              if (error instanceof HttpErrorResponse) {
                console.log('Response details:', error);
              }
            }
          );
      } else {
        console.error('Invalid update mode configuration.');
      }
    } else {
      // Create mode: Send submit request
      if (window.confirm('Are you sure you want to submit the survey?')) {
        console.log(this.surveyForm.valid, 'this.surveyForm.valid');
        if (this.surveyForm.valid) {
          console.log(this.model, 'this.model');
          this.restcallService.submit(this.model).subscribe(
            (response) => {
              console.log('Survey submitted successfully!', response);
              alert('Survey submitted successfully! ');
              this.resetForm();
            },
            (error) => {
              console.error('Error submitting survey:', error);
              alert(
                'Error in submitting the survey. Please check and resubmit'
              );
              if (error instanceof HttpErrorResponse) {
                console.log('Response details:', error);
              }
            }
          );
        } else {
          console.log('Form is not valid. Please check the required fields.');
        }
      } else {
        console.log('Survey submission cancelled.');
      }
    }
  }

  cancelSurvey() {
    if (window.confirm('Are you sure you want to cancel the survey?')) {
      this.resetForm();
    }
    console.log('Survey action cancelled!');
  }

  // Method to switch the form to update mode
  updateSurvey(surveyId: number) {
    this.isUpdateMode = true;
    this.updatingSurveyId = surveyId;

    // Fetch the survey data by ID and populate the form
    this.restcallService.getSurveyById(surveyId).subscribe(
      (surveyData) => {
        this.model = surveyData;
      },
      (error) => {
        console.error('Error fetching survey data for update:', error);
        alert('Error fetching survey data for update. Please try again.');
        this.resetForm();
      }
    );
  }

  // Method to delete a survey by ID
  deleteSurvey(surveyId: number) {
    if (window.confirm('Are you sure you want to delete the survey?')) {
      this.restcallService.delete(surveyId).subscribe(
        (response) => {
          console.log('Survey deleted successfully!', response);
          alert('Survey deleted successfully! ');
          this.resetForm();
        },
        (error) => {
          console.error('Error deleting survey:', error);
          alert('Error in deleting the survey. Please check and try again.');
          this.resetForm();
        }
      );
    }
  }

  // Method to reset the form to its initial state
  private resetForm() {
    this.isUpdateMode = false;
    this.updatingSurveyId = null;
    this.model = new Model();
    this.surveyForm.reset();
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
