// 1. Sree Charitha Meka – G01410061
// 2. Nagasumukh Hunsur Dinesh - G01394230

/*
 * app-routing.module.ts
 * Description: Module for defining application routes.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SurveyComponent } from './survey/survey.component';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }, // Default route
  { path: 'survey', component: SurveyComponent },
  { path: 'all-surveys', component: AllSurveysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
