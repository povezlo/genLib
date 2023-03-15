import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { IPreviewCoursesResponse, ICoursePreview } from '../../interfaces'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    @Inject('ENV_API') private readonly apiUrl: string,
    @Inject('BASE_URL') private readonly baseUrl: string,
    private http: HttpClient
    ) { }


  getPreviewCourses(): Observable<IPreviewCoursesResponse> {
    //     const headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<IPreviewCoursesResponse>(`${this.baseUrl}/${this.apiUrl}/core/preview-courses`);
  }


  getPreviewCourseById(id: string): Observable<ICoursePreview> {
    const httpParams = new HttpParams();
    return this.http.get<ICoursePreview>(`${this.baseUrl}/${this.apiUrl}/core/preview-courses`, { 
      params: httpParams.set('courseId', '352be3c6-848b-4c19-9e7d-54fe68fef183')
     });
  }
}
