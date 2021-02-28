import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { shaderback } from "../libs/shaderback.js";
import { Router } from "@angular/router"
import { InViewportMetadata } from 'ng-in-viewport';
import { Observable, fromEvent, timer } from 'rxjs';
import { debounceTime, throttleTime } from "rxjs/operators"

@Component({
  selector: 'app-pfolio',
  templateUrl: './pfolio.component.html',
  styleUrls: ['./pfolio.component.scss']
})
export class PfolioComponent implements OnInit {
  @ViewChild("portContainer", { static: false }) portContainer: ElementRef;
  @ViewChild('ngcanvas', { static: false }) canvas: any;
  mousePadSlide$: Observable<any>;
  checkCanvasTimer$: Observable<any> = timer(300)

  constructor(private router: Router, private renderer: Renderer2) {

  }

  ngOnInit() {
    var ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
      console.log("on mobile")

  }

  ngAfterViewInit() {
    this.mousePadSlide$ = fromEvent(this.portContainer.nativeElement, 'wheel');
    this.mousePadSlide$.pipe(
      throttleTime(600)
    ).subscribe(data => {
      if (window.scrollY === 0) {
        if (data.deltaY < 0) {
          this.routeHome();
        }
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (data.deltaY >= 0) {
          this.routeBye();
        }
      }
    })
    shaderback.resetCanvas();
    shaderback.loadURL("../../assets/shader.txt");
    let c = document.getElementById("shaderback")
    this.checkCanvasTimer$.subscribe(data => {
      let c = document.getElementById("shaderback")
      if (!c) {
        console.log("no canvas")
        let pc = document.getElementById("portContainer")
        this.renderer.addClass(pc, "blackBerryBack");
      }
    })
  }
  onTap(url) {
    console.log("tappd")
    window.open(url, '_blank');
  }
  routeHome() {
    this.router.navigate(['/home']);
  }
  routeBye() {
    this.router.navigate(['/bye']);
  }


  tempt(event) {
    const { visible, target } = event;
    if (visible)
      this.renderer.addClass(target, "tempt");
  }

  ngOnDestroy() {
    let c = document.getElementById("shaderback")
    if (c)
      c.remove();

  }

}
