import { 
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnDestroy
} from '@angular/core';
import Hls from 'hls.js';

const HLS_MEDIA_TYPE = 'application/vnd.apple.mpegurl';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() url?: string;
  @ViewChild('videoPlayer') videoElementRef!: ElementRef;

  videoElement!: HTMLVideoElement;
  private hls = new Hls();

  ngAfterViewInit(): void {
    this.initVideoElement();
  }

  initVideoElement(): void {
    this.videoElement = this.videoElementRef?.nativeElement;

    if(!this.url) return;

    if (Hls.isSupported()) {
      console.log("Video streaming supported by HLSjs", this.videoElement.currentTime)


      this.hls.loadSource(this.url);
      this.hls.attachMedia(this.videoElement);
      
      this.hls.on(Hls.Events.MANIFEST_PARSED, (e, data) => {
        console.log('MANIFEST_PARSED', e);
        console.log('MANIFEST_PARSED', data);
      });
    }

    else if (this.videoElement.canPlayType(HLS_MEDIA_TYPE)) {
      this.videoElement.src = this.url;
    }
  }

  ngOnDestroy(): void {
      this.hls.destroy();
  }
}