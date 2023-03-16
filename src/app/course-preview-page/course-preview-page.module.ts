import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoursePreviewPageComponent } from './course-preview-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoursePreviewPageComponent
  },
];

@NgModule({
  declarations: [CoursePreviewPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [CoursePreviewPageComponent]
})
export class CoursePreviewPageModule { }
