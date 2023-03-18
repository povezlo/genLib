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
const ID_VIDEO = 'id_video';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() url = '';
  @Input() poster?: string;
  @Input() title?: string;
  @ViewChild('videoPlayer') videoElementRef!: ElementRef;

  videoPlayer!: HTMLVideoElement;
  private defaultPlaybackRate = 0;
  private hls = new Hls();

  ngAfterViewInit(): void {
    this.initVideoElement();
  }

  initVideoElement(): void {
    this.videoPlayer = this.videoElementRef?.nativeElement;
    
    if(this.poster)  this.videoPlayer.poster = this.poster;

    this.defaultPlaybackRate = this.videoPlayer.defaultPlaybackRate;
 
    this.videoPlayer.play();

    if (Hls.isSupported()) {
      console.log("Video streaming supported by HLSjs", this.videoPlayer.currentTime)


      this.hls.loadSource(this.url);
      this.hls.attachMedia(this.videoPlayer);

      this.setStartTime()
      this.videoPlayer.addEventListener('timeOut', (e)=> console.log(e))
      this.hls.on(Hls.Events.LEVEL_LOADED, (e, data) => {
        console.log('LEVEL_LOADED', data);
      });
    }

    else if (this.videoPlayer.canPlayType(HLS_MEDIA_TYPE)) {
      this.videoPlayer.src = this.url;
    }
  }

  setStartTime(): void {
    const currentTime = localStorage.getItem(ID_VIDEO) || 0;
    if(currentTime && typeof currentTime === 'number') {
      this.videoPlayer.currentTime = currentTime;
    }
  }

  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
        this.videoPlayer.playbackRate = this.defaultPlaybackRate;
        break;
      case '2':
        if (event.shiftKey) {
          this.videoPlayer.playbackRate = 2;
        }
        break;
      case '+':
        this.videoPlayer.playbackRate += 0.25;
        break;
      case '-':
        this.videoPlayer.playbackRate -= 0.25;
        break;
    }
  }

  ngOnDestroy(): void {
    if (this.hls) {
      this.hls.destroy();
    }
  }
}