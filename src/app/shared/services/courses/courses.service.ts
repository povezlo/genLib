import { ApiClientBaseService } from '../api/api-client-base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICoursesResponse, ICoursePreviewResponse } from '../../interfaces'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private apiService: ApiClientBaseService) {}


  getCourses(): Observable<ICoursesResponse> | null {
      return this.apiService.get<ICoursesResponse>('core/preview-courses');
  }


  getPreviewCourse(id: string): Observable<ICoursePreviewResponse> {
      return this.apiService.get<ICoursePreviewResponse>(`core/preview-courses/${id}`)
  }
}
