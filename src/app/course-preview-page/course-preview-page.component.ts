import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { CoursesService, LoaderService, VideoPlayerService } from '../shared/services';
import { ICoursePreviewResponse, ILesson } from '../shared/interfaces';
import { SharedLoaderState } from '../shared/components';
@Component({
  selector: 'app-course-preview-page',
  templateUrl: './course-preview-page.component.html',
  styleUrls: ['./course-preview-page.component.scss']
})
export class CoursePreviewPageComponent implements AfterViewInit, OnDestroy {
  course: ICoursePreviewResponse | null = null; 
  mainVideoLesson: ILesson | null = null;
  
  sharedLoaderState = SharedLoaderState;

  private readonly subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private loader: LoaderService,
    private videoService: VideoPlayerService
  ) {}

  ngAfterViewInit(): void {
    this.loader.loaderStateSource$.next(SharedLoaderState.loading);
    const courseSub = this.route.params
    .pipe(
      map((params: Params) => params['id']),
      switchMap(id => this.coursesService.getPreviewCourse(id)),
      tap((res: ICoursePreviewResponse) => {
        if(res) {
          this.loader.loaderStateSource$.next(SharedLoaderState.loaded);
        } else {
          this.loader.loaderStateSource$.next(SharedLoaderState.noData);
        }
      })
    ).subscribe(res => {
      this.course = res;
      this.mainVideoLesson = this.course.lessons[0];
      this.videoService.setVideoLesson(this.mainVideoLesson);
      this.videoService.setLessonsPlaylist(this.course.lessons);
    });

    this.subscription.add(courseSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}