import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router"
//import { Observable, fromEvent } from 'rxjs';
//import { throttleTime } from "rxjs/operators"

//import { Bird } from "../libs/birds.js";

@Component({
  selector: 'app-byebye',
  templateUrl: './byebye.component.html',
  styleUrls: ['./byebye.component.scss']
})
export class ByebyeComponent implements OnInit {
  //@ViewChild("byeContainer", { static: false }) byeContainer: ElementRef;
  //mousePadSlide$: Observable<any>;
  constructor(private router: Router) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    /*this.mousePadSlide$ = fromEvent(this.byeContainer.nativeElement, 'wheel');
    this.mousePadSlide$.pipe(
      throttleTime(100)
    ).subscribe(data => {
      if (window.scrollY === 0) {
        if (data.deltaY < 0) {
          this.routeBack();
        }
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (data.deltaY >= 0) {
          this.routeHome();
        }
      }
    })
*/
  }
  routeBack() {
    this.router.navigate(['/portfolio']);
  }
  routeHome() {
    this.router.navigate(['/home']);
  }
}
