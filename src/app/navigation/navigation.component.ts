import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  allRoutes = [];
  @BlockUI() blockUI: NgBlockUI;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getRoutes();
  }

  getRoutes() {
    this.blockUI.start(); // Start blocking
    this.productService.getRoutes().subscribe((response: any) => {
      setTimeout(() => {
        this.blockUI.stop(); // Stop blocking
      }, 1000);
      this.allRoutes = response;
      console.log(this.allRoutes);
    });
  }

}
