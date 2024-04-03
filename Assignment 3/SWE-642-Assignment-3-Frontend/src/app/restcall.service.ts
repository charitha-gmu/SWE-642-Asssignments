// restcall.service.ts
// Description: Service for making HTTP calls to the backend for survey operations.
// Teammates: Mary Ashwitha Gopu - G01408743, Venkata Sree Divya Kasturi - G01411963
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestcallService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public submit(model: Model): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/add`, model);
  }

  public fetch(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/all`);
  }

  public update(id: number, model: Model): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/update/${id}`, model);
  }

  public delete(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete/${id}`);
  }

  public getSurveyById(id: number): Observable<Model> {
    return this.http.get<Model>(`${this.baseUrl}/get/${id}`);
  }
}
