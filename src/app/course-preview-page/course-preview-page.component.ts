import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators';
import { CoursesService, LoaderService } from '../shared';
import { ICoursePreviewResponse } from '../shared';
import { SharedLoaderState } from '../shared/components';
@Component({
  selector: 'app-course-preview-page',
  templateUrl: './course-preview-page.component.html',
  styleUrls: ['./course-preview-page.component.scss']
})
export class CoursePreviewPageComponent implements OnInit {
  course$: Observable<ICoursePreviewResponse> | null = null; 
  orderLesson = 0; 
  
  sharedLoaderState = SharedLoaderState;

  constructor(
    private route: ActivatedRoute,
    private courses: CoursesService,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.loader.loaderStateSource$.next(SharedLoaderState.loading);
    this.course$ = this.route.params
    .pipe(
      map((params: Params) => params['id']),
      switchMap(id => this.courses.getPreviewCourse(id)),
      tap((res: ICoursePreviewResponse) => {
        if(res) {
          this.loader.loaderStateSource$.next(SharedLoaderState.loaded);
        } else {
          this.loader.loaderStateSource$.next(SharedLoaderState.noData);
        }
      })
    );
  }

  switchLesson(): void {
    this.orderLesson = 1;
    console.log(this.orderLesson);
  }
}