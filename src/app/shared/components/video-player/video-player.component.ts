import { 
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild
 } from '@angular/core';
import Hls, { HlsUrlParameters } from 'hls.js';

const HLS_MEDIA_TYPE = 'application/vnd.apple.mpegurl';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit {
  @Input() url?: string;
  @ViewChild('videoPlayer') videoElementRef!: ElementRef;

  videoElement!: HTMLVideoElement;

  ngAfterViewInit(): void {
    this.videoElement = this.videoElementRef?.nativeElement;

    if(!this.url) return;

    if (Hls.isSupported()) {
      console.log("Video streaming supported by HLSjs")


      const hls = new Hls();
      hls.loadSource(this.url);
      hls.attachMedia(this.videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, (e) => {
        console.log('videostream', e);
      });
      HlsUrlParameters
    }

    else if (this.videoElement.canPlayType(HLS_MEDIA_TYPE)) {
      this.videoElement.src = this.url;
    }
  }
}