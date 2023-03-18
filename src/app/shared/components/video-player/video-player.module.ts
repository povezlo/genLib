import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule { }
