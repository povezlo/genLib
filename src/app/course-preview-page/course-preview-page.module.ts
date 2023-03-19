import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoursePreviewPageComponent } from './course-preview-page.component';
import { VideoLessonComponent } from './components';
import { SkiilBoxModule, SharedLoaderModule } from '../shared/components';

const routes: Routes = [
  {
    path: '',
    component: CoursePreviewPageComponent
  },
];

@NgModule({
  declarations: [
    CoursePreviewPageComponent,
    VideoLessonComponent
  ],
  imports: [
    SkiilBoxModule,
    RouterModule.forChild(routes),
    SharedLoaderModule,
    SharedModule,
  ],
  exports: [
    CoursePreviewPageComponent,
    VideoLessonComponent
  ]
})
export class CoursePreviewPageModule { }
