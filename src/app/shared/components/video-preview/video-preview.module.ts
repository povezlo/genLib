import { NgModule } from '@angular/core';
import { VideoPreviewComponent } from './video-preview.component';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [
    VideoPreviewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [VideoPreviewComponent]
})
export class VideoPreviewModule { }
