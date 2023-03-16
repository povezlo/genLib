import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VideoPreviewComponent } from './components';
import { CoursePreviewPageComponent } from './course-preview-page.component';
import { VideoLessonComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: CoursePreviewPageComponent
  },
];

@NgModule({
  declarations: [
    CoursePreviewPageComponent,
    VideoPreviewComponent,
    VideoLessonComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CoursePreviewPageComponent,
    VideoPreviewComponent,
    VideoLessonComponent
  ]
})
export class CoursePreviewPageModule { }
