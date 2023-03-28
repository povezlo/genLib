import {
  ComponentRef,
  Directive,
  HostListener,
  Input,
  OnInit,
  ViewContainerRef
  } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { VideoPreviewPopupComponent } from '../../course-preview-page/components';
import { ICourseVideoPreview } from '../interfaces';

@Directive({
  selector: '[appVideoPreviewModal]'
})
export class VideoPreviewModalDirective implements OnInit {
  @Input('appVideoPreviewModal') videoPreview: ICourseVideoPreview | undefined = undefined;
  private componentRef: ComponentRef<VideoPreviewPopupComponent> | null = null;
  private isSmallScreen = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
      this.isSmallScreen = this.breakpointObserver.isMatched([
        Breakpoints.XSmall,
        Breakpoints.Small,
      ]);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if(this.isSmallScreen) return;
    this.showPopup();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if(this.isSmallScreen) return;
    this.hidePopup();
  }

  showPopup() {
    this.viewContainerRef.clear();

    const componentFactory = this.viewContainerRef.createComponent(VideoPreviewPopupComponent);
    componentFactory.instance.video = this.videoPreview;
    componentFactory.instance.unmuted = true;
    componentFactory.instance.autoPlay = true;
    this.componentRef = componentFactory;
  }

  hidePopup() {
    if (this.componentRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.componentRef.hostView));
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
  }
