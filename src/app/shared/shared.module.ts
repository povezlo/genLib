import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {LayoutModule} from '@angular/cdk/layout';

import { RatingModule, VideoPlayerModule, VideoPreviewPopupComponent } from '../shared/components';
import { TransformTimePipe } from './pipes/transform-time/transform-time.pipe';

const MATERIAL_MODULES = [
    MatCardModule,
    MatButtonModule,
    RatingModule,
    MatPaginatorModule,
    MatChipsModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    LayoutModule
]

@NgModule({
  declarations: [VideoPreviewPopupComponent, TransformTimePipe],
  imports: [
    CommonModule,
    VideoPlayerModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    CommonModule,
    VideoPlayerModule,
    ...MATERIAL_MODULES,
    VideoPreviewPopupComponent,
    TransformTimePipe
  ]
})
export class SharedModule { }
