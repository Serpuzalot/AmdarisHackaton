import {AfterViewInit, Component, OnInit} from '@angular/core';
import {interval, take} from "rxjs";
import * as gsap from 'gsap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit{

  isMouseDown = false;
  startY: any;
  scrollTop: any;
  position: any;
  intervalSubscribe = interval(10);
  projectTitle = 'Amdaris Helper';

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.position = {
      // The current scroll
      left: window.scrollX,
      top: window.scrollY,
      // Get the current mouse position
      x: 0,
      y: 0,
    };
  }

  ngAfterViewInit(): void {
    gsap.gsap.to('.main-page-title',{x:800, duration:2});

    gsap.gsap.registerEffect({
      name: "fade",
      effect: (targets: any, config: any) => {
        return gsap.gsap.to(targets, {duration: config.duration, opacity: 0});
      },
      defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
      extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    });
  }

  mouseDownTrack(e: MouseEvent) {
    this.isMouseDown = true;
    this.position = {
      // The current scroll
      left: window.scrollX,
      top: window.scrollY,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
  }

  moveEvent(e: MouseEvent) {
    if (!this.isMouseDown) {
      return;
    }
    // How far the mouse has been moved
    const dx = e.clientX - this.position.x;
    const dy = e.clientY - this.position.y;
    // Scroll the element
    window.scrollTo(this.position.left - dx, this.position.top - dy);
  }

  downClick(): void {
    this.intervalSubscribe.pipe(take(50)).subscribe(()=> {
      window.scrollTo(this.position.left + 10, this.position.top + 10);
      this.position.left = window.scrollX;
      this.position.top = window.scrollY;
    })
  }

  upClick(): void {
    this.intervalSubscribe.pipe(take(50)).subscribe(()=> {
      window.scrollTo(this.position.left - 10, this.position.top - 10);
      this.position.left = window.scrollX;
      this.position.top = window.scrollY;
    });
  }
}
