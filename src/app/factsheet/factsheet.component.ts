import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-factsheet',
  templateUrl: './factsheet.component.html',
  styleUrls: ['./factsheet.component.css']
})
export class FactsheetComponent implements OnInit {

  factsheet: any;
  @BlockUI() blockUI: NgBlockUI;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getFactsheet();
  }

  getFactsheet() {
    this.blockUI.start(); // Start blocking
    this.productService.getFactsheet().subscribe((response: any) => {
      setTimeout(() => {
        this.blockUI.stop(); // Stop blocking
      }, 1000);
      this.factsheet = response;
      console.log(this.factsheet);
    });
  }

}
