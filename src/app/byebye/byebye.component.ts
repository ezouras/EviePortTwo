import { Component, OnInit } from '@angular/core';
import { Bird } from "../libs/birds.js";

@Component({
  selector: 'app-byebye',
  templateUrl: './byebye.component.html',
  styleUrls: ['./byebye.component.scss']
})
export class ByebyeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*var c = document.getElementById("shaderback");
    if (c) {
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }*/
  }

}
