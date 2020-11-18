import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit {

  qualityList = [];
  @BlockUI() blockUI: NgBlockUI;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getQualityList();
  }

  getQualityList() {
    this.blockUI.start(); // Start blocking
    this.productService.getQualityList().subscribe((response: any) => {
      setTimeout(() => {
        this.blockUI.stop(); // Stop blocking
      }, 1000);
      this.qualityList = response;
      console.log(this.qualityList);
    });
  }

}
