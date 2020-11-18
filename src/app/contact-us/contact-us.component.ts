import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactData: any;
  @BlockUI() blockUI: NgBlockUI;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getContactData();
  }

  getContactData() {
    this.blockUI.start(); // Start blocking
    this.productService.getContactData().subscribe((response: any) => {
      setTimeout(() => {
        this.blockUI.stop(); // Stop blocking
      }, 1000);
      this.contactData = response;
      console.log(this.contactData);
    });
  }

}
