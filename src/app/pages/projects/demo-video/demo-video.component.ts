import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo-video',
  templateUrl: './demo-video.component.html',
  styleUrls: ['./demo-video.component.scss']
})
export class DemoVideoComponent   {
 showDemo = false;
  videoSrc = './../../../../assets/videos/ai_demo.mp4';

  @ViewChild('videoEl') videoRef!: ElementRef<HTMLVideoElement>;

  openDemo() {
    this.showDemo = true;
  }

  onDialogShow() {
    const v = this.videoRef?.nativeElement;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {
      // Autoplay might be blocked if not muted; video is muted in template
    });
  }

  onDialogHide() {
    const v = this.videoRef?.nativeElement;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }

}
