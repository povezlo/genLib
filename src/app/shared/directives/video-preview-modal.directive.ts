import { 
  ComponentRef,
  Directive,
  HostListener,
  Input,
  ViewContainerRef
  } from '@angular/core';
  
import { VideoPreviewComponent } from '../../course-preview-page/components';
import { ICourseVideoPreview } from '../interfaces';

@Directive({
  selector: '[appVideoPreviewModal]'
})
export class VideoPreviewModalDirective {
  @Input('appVideoPreviewModal') videoPreview: ICourseVideoPreview | undefined = undefined;
  private componentRef: ComponentRef<VideoPreviewComponent> | null = null;

  constructor(private viewContainerRef: ViewContainerRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showPopup();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hidePopup();
  }

  showPopup() {
    this.viewContainerRef.clear();

    const componentFactory = this.viewContainerRef.createComponent(VideoPreviewComponent);
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