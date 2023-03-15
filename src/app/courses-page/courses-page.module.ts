import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page.component';
import { MatCardModule } from '@angular/material/card';
import { RatingModule } from '../shared/components';
import { CoursesRoutingModule } from './courses-routing.module';
import { MatButtonModule } from '@angular/material/button'; 
import { MatPaginatorModule } from '@angular/material/paginator';
 import {MatChipsModule} from '@angular/material/chips'; 

@NgModule({
  declarations: [
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatCardModule,
    MatButtonModule,
    RatingModule,
    MatPaginatorModule,
    MatChipsModule
  ],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
