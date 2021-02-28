import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToPort() {
    this.router.navigate(['/portfolio']);
  }

  onMouseWheel($event) {
    if ($event.deltaY > 0)
      this.routeToPort()
  }


}
