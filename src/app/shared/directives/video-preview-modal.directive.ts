import { 
  ComponentRef,
  Directive,
  HostListener,
  Input,
  ViewContainerRef
  } from '@angular/core';
  
import { VideoPreviewPopupComponent } from '../../course-preview-page/components';
import { ICourseVideoPreview } from '../interfaces';

@Directive({
  selector: '[appVideoPreviewModal]'
})
export class VideoPreviewModalDirective {
  @Input('appVideoPreviewModal') videoPreview: ICourseVideoPreview | undefined = undefined;
  private componentRef: ComponentRef<VideoPreviewPopupComponent> | null = null;

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

    const componentFactory = this.viewContainerRef.createComponent(VideoPreviewPopupComponent);
    componentFactory.instance.video = this.videoPreview;
    componentFactory.instance.unmuted = true;
    componentFactory.instance.autoPlay = true;
    componentFactory.instance.isPopup = true;
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