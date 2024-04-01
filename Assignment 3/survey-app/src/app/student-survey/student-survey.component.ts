import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-survey',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-survey.component.html',
  styleUrl: './student-survey.component.css',
})
export class StudentSurveyComponent {}
