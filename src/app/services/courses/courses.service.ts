import { ApiClientBaseService } from '../api/api-client-base.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IPreviewCoursesResponse, ICoursePreview } from '../../interfaces'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private apiService: ApiClientBaseService) { }


  getPreviewCourses(): Observable<IPreviewCoursesResponse> {
    return this.apiService.get<IPreviewCoursesResponse>('core/preview-courses');
  }


  getPreviewCourseById(id: string): Observable<ICoursePreview> {
    return this.apiService.get<ICoursePreview>('core/preview-courses', { courseId: '352be3c6-848b-4c19-9e7d-54fe68fef183'});
  }
}
