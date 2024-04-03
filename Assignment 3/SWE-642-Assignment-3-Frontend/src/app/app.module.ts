/*
 * app.module.ts
 * Description: Main module of the Angular application.
 * Teammates: Mary Ashwitha Gopu - G01408743, Venkata Sree Divya Kasturi - G01411963
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SurveyComponent } from './survey/survey.component';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    AllSurveysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    CommonModule, BrowserAnimationsModule, 

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

