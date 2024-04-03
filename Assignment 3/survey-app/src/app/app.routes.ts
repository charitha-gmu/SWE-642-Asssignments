import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentSurveyComponent } from './student-survey/student-survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

export const routes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
    title: 'Welcome',
  },
  {
    path: 'survey',
    component: StudentSurveyComponent,
    title: 'Survey',
  },
  {
    path: 'all-surveys',
    component: SurveyListComponent,
    title: 'All Surveys',
  },
  // ...other routes
];
