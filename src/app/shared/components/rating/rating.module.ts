import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RatingComponent } from './rating.component';
import { ShowStarPipe } from './pipe/show-star.pipe';

@NgModule({
  declarations: [RatingComponent, ShowStarPipe],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [RatingComponent],
})
export class RatingModule {}
