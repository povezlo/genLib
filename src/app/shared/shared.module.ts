import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatListModule } from '@angular/material/list'; 

import { RatingModule, VideoPlayerModule } from '../shared/components';

const MATERIAL_MODULES = [
    MatCardModule,
    MatButtonModule,
    RatingModule,
    MatPaginatorModule,
    MatChipsModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VideoPlayerModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    CommonModule,
    VideoPlayerModule,
    ...MATERIAL_MODULES
  ]
})
export class SharedModule { }
