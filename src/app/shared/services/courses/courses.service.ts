import { ApiClientBaseService } from '../api/api-client-base.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ICoursesResponse, ICoursePreviewResponse } from '../../interfaces'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses$: Observable<ICoursesResponse> | null = null;

  constructor(private apiService: ApiClientBaseService) {}


  getCourses(): Observable<ICoursesResponse> | null {
      if (!this.courses$) {
          this.courses$ = this.apiService.get<ICoursesResponse>('core/preview-courses')
          .pipe(shareReplay());
    }

    return this.courses$;
  }


  getPreviewCourse(id: string): Observable<ICoursePreviewResponse> {
      return this.apiService.get<ICoursePreviewResponse>(`core/preview-courses/${id}`)
  }
}
