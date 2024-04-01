import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Route } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { StudentSurveyComponent } from './student-survey/student-survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

const routes: Route[] = [
  { path: '', component: WelcomeComponent, title: 'Welcome' }, // assuming WelcomeComponent is standalone
  { path: 'survey', component: StudentSurveyComponent, title: 'Survey' }, // assuming StudentSurveyComponent is standalone
  { path: 'all-surveys', component: SurveyListComponent, title: 'All Surveys' },
  // Add more routes as needed
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // RouterModule.registerRoutes(routes),
    WelcomeComponent,
    StudentSurveyComponent,
    SurveyListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // routes,
})
export class AppComponent {
  title = 'survey-app';
}
