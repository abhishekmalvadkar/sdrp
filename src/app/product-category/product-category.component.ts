import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  productTypes = [];
  @BlockUI() blockUI: NgBlockUI;
  constructor(private productService: ProductService) {
    this.blockUI.start(); // Start blocking
    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 1000);

   }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.blockUI.start(); // Start blocking
    this.productService.getAllProducts().subscribe((response: any) => {
      setTimeout(() => {
        this.blockUI.stop(); // Stop blocking
      }, 1000);
      this.productTypes = response;
    });
  }

}
