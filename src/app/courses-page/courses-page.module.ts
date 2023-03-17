import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './components/course/course.component';
import { SharedLoaderModule } from '../shared/components';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule,
    SharedLoaderModule
  ],
  exports: [CoursesPageComponent, CourseComponent]
})
export class CoursesPageModule { }
