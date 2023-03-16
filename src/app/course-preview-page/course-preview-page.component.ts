import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { map, switchMap } from 'rxjs/operators';
import { CoursesService } from '../shared';
import { ICoursePreviewResponse } from '../shared';
@Component({
  selector: 'app-course-preview-page',
  templateUrl: './course-preview-page.component.html',
  styleUrls: ['./course-preview-page.component.scss']
})
export class CoursePreviewPageComponent implements OnInit {
  course$: Observable<ICoursePreviewResponse> | null = null;   
  constructor(
    private route: ActivatedRoute,
    private courses: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.course$ = this.route.params
    .pipe(
      map((params: Params) => params['id']),
      switchMap(id => this.courses.getPreviewCourse(id))
      );
  }
}