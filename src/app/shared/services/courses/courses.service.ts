import { ApiClientBaseService } from '../api/api-client-base.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { IPreviewCoursesResponse } from '../../interfaces'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses$: Observable<IPreviewCoursesResponse> | null = null;

  constructor(private apiService: ApiClientBaseService) {}


  getPreviewCourses(): Observable<IPreviewCoursesResponse> | null {
      if (!this.courses$) {
          this.courses$ = this.apiService.get<IPreviewCoursesResponse>('core/preview-courses')
          .pipe(shareReplay());
    }

    return this.courses$;
  }
}
