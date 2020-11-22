import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  constructor() {
    this.blockUI.start(); // Start blocking
    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 1000);

   }

  ngOnInit(): void {
  }

}
