import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentSurveyComponent } from './student-survey/student-survey.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
// Import additional modules here

@NgModule({
  declarations: [
    AppComponent,
    StudentSurveyComponent,
    WelcomeComponent,
    SurveyListComponent,
    // Declare components here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Import additional modules here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
