import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePreviewPageComponent } from './course-preview-page.component';

describe('CoursePreviewPageComponent', () => {
  let component: CoursePreviewPageComponent;
  let fixture: ComponentFixture<CoursePreviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursePreviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursePreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
