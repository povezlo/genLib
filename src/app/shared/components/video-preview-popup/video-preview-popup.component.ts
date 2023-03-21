import { Component, Input } from '@angular/core';

import { ICourseVideoPreview } from 'src/app/shared';
@Component({
  selector: 'app-video-preview-popup',
  templateUrl: './video-preview-popup.component.html',
  styleUrls: ['./video-preview-popup.component.scss']
})
export class VideoPreviewPopupComponent {
  @Input() video?: ICourseVideoPreview | undefined = undefined;
  @Input() unmuted = true;
  @Input() autoPlay = false;
  @Input() isPopup = true;
}