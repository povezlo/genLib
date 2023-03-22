import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { of } from 'rxjs/internal/observable/of';

import { CoursesService, LoaderService } from '../shared';
import { CoursesPageComponent } from './courses-page.component';
import { coursesMockdata, CoursesMockService } from 'src/assets/tesing';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  let сoursesService: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent ],
      providers: [{
        provide: CoursesService,
        useClass: CoursesMockService
      },
      LoaderService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should getCourses return courses method on initialization', () => fakeAsync(() =>{
    сoursesService = TestBed.inject(CoursesService);
    
    spyOn(сoursesService, 'getCourses').and.callThrough();
    fixture.detectChanges();
    expect(component.courses$).toEqual(of([coursesMockdata]));
  }));
})