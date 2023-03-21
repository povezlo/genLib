import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable'

import { CoursesService, LoaderService, VideoLessonsPlayerService } from '../shared/services';
import { ICoursePreviewResponse, ILesson } from '../shared/interfaces';
import { SharedLoaderState } from '../shared/components';
@Component({
  selector: 'app-course-preview-page',
  templateUrl: './course-preview-page.component.html',
  styleUrls: ['./course-preview-page.component.scss']
})
export class CoursePreviewPageComponent implements AfterViewInit {
  course$: Observable<ICoursePreviewResponse> | null = null; 
  mainVideoLesson: ILesson | null = null;
  
  sharedLoaderState = SharedLoaderState;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private loader: LoaderService,
    private videoService: VideoLessonsPlayerService
  ) {}

  ngAfterViewInit(): void {
    this.loader.loaderStateSource$.next(SharedLoaderState.loading);
   
    this.course$ = this.route.params
    .pipe(
      map((params: Params) => params['id']),
      switchMap(id => this.coursesService.getPreviewCourse(id)),
      tap((course: ICoursePreviewResponse) => {
        if(course) {
          this.loader.loaderStateSource$.next(SharedLoaderState.loaded);

        this.mainVideoLesson = course.lessons[0];
        this.videoService.setVideoLesson(this.mainVideoLesson);
        this.videoService.setLessonsPlaylist(course.lessons);

        } else {
          this.loader.loaderStateSource$.next(SharedLoaderState.noData);
        }
      })
    )
  }
}