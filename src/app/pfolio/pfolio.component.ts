import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { shaderback } from "../libs/shaderback.js";
import { Router } from "@angular/router"
import { InViewportMetadata } from 'ng-in-viewport';
import { Observable, fromEvent } from 'rxjs';
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
  /*  windowHeight: number;
    innerWindowHeight: number;*/

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    var ua = navigator.userAgent;



    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
      console.log("on mobile")
    shaderback.loadURL("../../assets/shader.txt")
    /* transition comtaimer
    text-shadow: 0 0 0px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 4px #0ff, 0 0 30px #0ff, 0 0 15px #0ff, 0 0 15px #0ff, 0 0 35px #0ff;
    */

  }
  ngAfterViewInit() {
    console.log("port container is ", this.portContainer.nativeElement)
    this.mousePadSlide$ = fromEvent(this.portContainer.nativeElement, 'wheel');
    this.mousePadSlide$.pipe(
      throttleTime(600)
    ).subscribe(data => {


      if (window.scrollY === 0) {
        //console.log("your at the top of the page")
        if (data.deltaY < 0) {
          console.log("route home!")
        }
      }
      //console.log("document body ", window.innerHeight)
      //console.log("document offsethieght", document.body.offsetHeight)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //console.log("your at the bottom of the page!")
        if (data.deltaY >= 0) {
          console.log("route bye!")
        }
      }
    })
    console.log("canvas is ", this.canvas)
    console.log("canvas is ")


  }
  routeHome() {
    this.router.navigate(['/home']);
  }
  routeBye() {
    this.router.navigate(['/byebye']);
  }

  onMouseWheel($event) {
    $event.deltaY > 0 ? this.routeBye() : this.routeHome();

  }

  tempt(event) {
    //const { [InViewportMetadata]: { entry }, visible } = event;
    //[inViewportOptions]="{ partial: true, threshold: [0, 1] }"
    const { visible, target } = event;
    if (visible)
      this.renderer.addClass(target, "tempt");

    console.log("in tempt", visible)
  }

  ngOnDestroy() {
    console.log("Destroy Port!")
    let c = document.getElementById("shaderback")
    c.remove();
    /*var myobj = document.getElementById("demo");
myobj.remove();
let ctx = c.getContext('2d');
    console.log("c", c)
    console.log("ctx is ", ctx)
    if (ctx) {
      ctx.clearRect(0, 0, c.width, c.height);
    }
*/

  }

}
