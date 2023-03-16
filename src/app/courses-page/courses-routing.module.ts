import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursesPageComponent } from './courses-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    component: CoursesPageComponent,
  },
  {
    path: 'courses/:id',
    loadChildren: () => import('../course-preview-page/course-preview-page.module').then(m => m.CoursePreviewPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}