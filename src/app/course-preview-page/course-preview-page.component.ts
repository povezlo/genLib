import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { BehaviorSubject, Observable, Subscription } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators';
import { CoursesService, ILesson, LoaderService, VideoPlayerService } from '../shared';
import { ICoursePreviewResponse } from '../shared';
import { SharedLoaderState } from '../shared/components';
@Component({
  selector: 'app-course-preview-page',
  templateUrl: './course-preview-page.component.html',
  styleUrls: ['./course-preview-page.component.scss']
})
export class CoursePreviewPageComponent implements OnInit, OnDestroy {
  course: ICoursePreviewResponse | null = null; 

  currentLessonSubject$ = new BehaviorSubject<ILesson | null>(null); 
  currentLesson$: Observable<ILesson | null> | null = null; 
  
  sharedLoaderState = SharedLoaderState;

  private readonly subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private loader: LoaderService,
    private videoService: VideoPlayerService
  ) {
    this.currentLesson$ = this.currentLessonSubject$.asObservable(); 
  }

  ngOnInit(): void {
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
      this.currentLessonSubject$.next(this.course.lessons[0]);
    });

    this.subscription.add(courseSub);
  }

  switchLesson(index: number): void {
    if(!this.course) return;
    const order = this.course.lessons.find(lesson => lesson.order === index)?.order || 0;
    this.currentLessonSubject$.next(this.course.lessons[order]);
    this.videoService.updateVideoPlayerStartSource$.next();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}