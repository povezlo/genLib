import { Component, Input } from '@angular/core';
import { ICourseVideoPreview } from '../../interfaces';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent {
  @Input() courseVideoPreview: ICourseVideoPreview | undefined = undefined;

}
