import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { shaderback } from "../libs/shaderback.js";
import { Router } from "@angular/router"
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from "rxjs/operators"

@Component({
  selector: 'app-pfolio',
  templateUrl: './pfolio.component.html',
  styleUrls: ['./pfolio.component.scss']
})
export class PfolioComponent implements OnInit {
  @ViewChild("portContainer", { static: false }) portContainer: ElementRef;
  mousePadSlide$: Observable<any>;
  /*  windowHeight: number;
    innerWindowHeight: number;*/

  constructor(private router: Router) { }

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

}
