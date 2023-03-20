import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MatIconModule } from '@angular/material/icon';

import { CoursePreviewPageComponent } from './course-preview-page.component';
import { VideoLessonsComponent } from './components';
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
    VideoLessonsComponent
  ],
  imports: [
    SkiilBoxModule,
    RouterModule.forChild(routes),
    SharedLoaderModule,
    SharedModule,
    MatIconModule
  ],
  exports: [
    CoursePreviewPageComponent,
    VideoLessonsComponent
  ]
})
export class CoursePreviewPageModule { }
