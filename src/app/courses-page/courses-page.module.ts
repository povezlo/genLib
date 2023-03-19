import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CourseComponent } from './components';
import { SharedLoaderModule, SkiilBoxModule } from '../shared/components';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule,
    SharedLoaderModule,
    SkiilBoxModule
  ],
  exports: [CoursesPageComponent, CourseComponent]
})
export class CoursesPageModule { }
