import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switching',
  templateUrl: './switching.component.html',
  styleUrls: ['./switching.component.css']
})
export class SwitchingComponent implements OnInit {
  buttonStatus : boolean[]
  constructor() {}
  
  ngOnInit() {
    this.buttonStatus = [true, true, true, true, true]
  }

  switchButton(status, idx) {
    if(this.buttonStatus[idx] == true) {
      this.buttonStatus[idx] = false;
    }else if(this.buttonStatus[idx] == false) {
      this.buttonStatus[idx] = true;
    };
  }
}
