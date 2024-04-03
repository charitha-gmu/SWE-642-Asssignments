/*
 * app-routing.module.ts
 * Description: Module for defining application routes.
 * Teammates: Mary Ashwitha Gopu - G01408743, Venkata Sree Divya Kasturi - G01411963
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
  exports: [RouterModule]
})
export class AppRoutingModule {}
