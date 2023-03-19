import { Component, Input } from '@angular/core';
import { ICourseVideoPreview } from 'src/app/shared';
@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent {
  @Input() video?: ICourseVideoPreview | undefined = undefined;
  @Input() unmuted = false;
  @Input() autoPlay = false;
}