import { Component, OnInit } from '@angular/core';
import { shaderback } from "../libs/shaderback.js";

@Component({
  selector: 'app-pfolio',
  templateUrl: './pfolio.component.html',
  styleUrls: ['./pfolio.component.scss']
})
export class PfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    shaderback.loadURL("../../assets/shader.txt")
  }

}
