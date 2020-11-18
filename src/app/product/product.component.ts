import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productTypeId: any;
  productCategory: any;
  @BlockUI() blockUI: NgBlockUI;

  constructor(private productService: ProductService, private actRoute: ActivatedRoute) {
      this.productTypeId = this.actRoute.snapshot.params.id;
    }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.blockUI.start(); // Start blocking
    this.productService.getAllProducts().subscribe((response: any) => {
      setTimeout(() => {
        this.blockUI.stop(); // Stop blocking
      }, 1000);
      let allProductType = [];
      allProductType = response;
      this.productCategory = allProductType.find(productType => productType.productTypeId == this.productTypeId);
      console.log(this.productCategory);
    });
  }

}
