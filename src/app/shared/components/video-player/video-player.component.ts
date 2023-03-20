import { 
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnDestroy,
} from '@angular/core';

import { MatTooltip } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';
import Hls from 'hls.js';

import { VideoPlayerService } from '../../services';

const HLS_MEDIA_TYPE = 'application/vnd.apple.mpegurl';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() id = '';
  @Input() url = '';
  @Input() poster?: string;
  @Input() title?: string;
  @Input() unmuted = false;
  @Input() autoplay = false;
  @ViewChild('videoPlayer', { static: true }) videoElementRef!: ElementRef; 
  @ViewChild(MatTooltip) tooltip!: MatTooltip;

  videoPlayer!: HTMLVideoElement;

  private readonly subscription = new Subscription();

  private hls = new Hls();
  private defaultPlaybackRate = 0;
  
  constructor(private playerService: VideoPlayerService) { }

  
  ngAfterViewInit(): void {
    this.initVideoElement();

    const updateVideoSub = this.playerService.updateVideoPlayerStart$.subscribe(() => {
      this.initVideoElement();
    })

    this.subscription.add(updateVideoSub);
  }

  initVideoElement(): void {
    this.videoPlayer = this.videoElementRef?.nativeElement;
    
    if(this.poster)  this.videoPlayer.poster = this.poster;
    this.videoPlayer.autoplay = this.autoplay;
    this.videoPlayer.muted = this.unmuted;
    this.defaultPlaybackRate = this.videoPlayer.defaultPlaybackRate;
    this.videoPlayer.currentTime = this.getProgress();

    if (Hls.isSupported()) {
      this.hls.loadSource(this.url);
      this.hls.attachMedia(this.videoPlayer);
      this.saveProgress();

      this.videoPlayer.addEventListener('pause', () => this.saveProgress());
    }

    else if (this.videoPlayer.canPlayType(HLS_MEDIA_TYPE)) {
      this.videoPlayer.src = this.url;
    }
    // console.log(this.url, this.title, this.id);
  }

  getProgress(): number {
    return Number(localStorage.getItem(this.id)) || 0;
  }

  saveProgress(): void {
    localStorage.setItem(this.id, String(this.videoPlayer.currentTime));
  }

  setPlaybackRate(event: KeyboardEvent): void {
    switch (event.key) {
      case '0':
        this.videoPlayer.playbackRate = this.defaultPlaybackRate;
        this.tooltip.show();
        break;
      case '2':
        if (event.shiftKey) {
          this.videoPlayer.playbackRate = 2;
          this.tooltip.show();
        }
        break;
      case '+':
        this.videoPlayer.playbackRate += 0.25;
          this.tooltip.show();
        break;
      case '-':
        this.videoPlayer.playbackRate -= 0.25;
          this.tooltip.show();
        break;
    }
  }

  ngOnDestroy(): void {
    if (this.hls) {
      this.hls.destroy();
    }
    this.subscription.unsubscribe();
  }
}