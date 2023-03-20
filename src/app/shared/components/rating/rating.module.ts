import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RatingComponent } from './rating.component';
import { ShowRatingStarPipe } from '../../pipes';

@NgModule({
  declarations: [RatingComponent, ShowRatingStarPipe],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [RatingComponent],
})
export class RatingModule {}
