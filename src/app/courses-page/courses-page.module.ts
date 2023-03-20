import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './components';
import { CoursesPageComponent } from './courses-page.component';
import { VideoPreviewModalDirective } from '../shared/directives';
import { SharedLoaderModule, SkiilBoxModule } from '../shared/components';

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
