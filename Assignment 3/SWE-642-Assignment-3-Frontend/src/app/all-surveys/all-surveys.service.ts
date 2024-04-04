// 1. Sree Charitha Meka – G01410061
// 2. Nagasumukh Hunsur Dinesh - G01394230

// all-surveys.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpHeaders
import { Observable } from 'rxjs';
import { Model } from '../model';
import { Router } from '@angular/router';
import { UpdateSurveyResponse } from './update-survey-response';

@Injectable({
  providedIn: 'root',
})
export class AllSurveysService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) {}

  getAllSurveys(): Observable<Model[]> {
    // Add headers to specify JSON response
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Model[]>(`${this.baseUrl}/all`, { headers });
  }

  submitSurvey(model: Model): Observable<string> {
    // Add headers to specify JSON request
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<string>(`${this.baseUrl}/add`, model, { headers });
  }

  updateSurvey(
    id: number,
    updatedSurvey: Model
  ): Observable<UpdateSurveyResponse> {
    // Add headers to specify JSON request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<UpdateSurveyResponse>(
      `${this.baseUrl}/update/${id}`,
      updatedSurvey,
      { headers }
    );
  }

  deleteSurvey(id: number): Observable<string> {
    // No need to specify headers for DELETE request
    return this.http.delete<string>(`${this.baseUrl}/delete/${id}`);
  }

  getSurveyById(id: number): Observable<Model> {
    // Add headers to specify JSON response
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Model>(`${this.baseUrl}/get/${id}`, { headers });
  }
}
