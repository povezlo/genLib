import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CourseComponent } from './components';
import { SharedLoaderModule, SkiilBoxModule } from '../shared/components';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { VideoPreviewModalDirective } from '../shared/directives';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    VideoPreviewModalDirective
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
