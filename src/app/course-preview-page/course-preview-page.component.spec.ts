import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { coursePreviewMockData, CoursesMockService } from 'src/assets/tesing';
import { CoursesService, LoaderService, TransformTimePipe } from '../shared';

import { CoursePreviewPageComponent } from './course-preview-page.component';

describe('CoursePreviewPageComponent', () => {
  let component: CoursePreviewPageComponent;
  let fixture: ComponentFixture<CoursePreviewPageComponent>;
  let сoursesService: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePreviewPageComponent, TransformTimePipe ],
      providers: [{
        provide: CoursesService,
        useClass: CoursesMockService
      },
      LoaderService
      ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CoursePreviewPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  
  it('should getPreviewCourse return course preview method on initialization', () => fakeAsync(() =>{
    сoursesService = TestBed.inject(CoursesService);
    
    spyOn(сoursesService, 'getPreviewCourse').and.callThrough();
    expect(component.course$).toEqual(of(coursePreviewMockData));
  }));
});
