import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MatIconModule } from '@angular/material/icon';

import { CoursePreviewPageComponent } from './course-preview-page.component';
import { PlaylistLessonsComponent } from './components';
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
    PlaylistLessonsComponent
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
    PlaylistLessonsComponent
  ]
})
export class CoursePreviewPageModule { }
