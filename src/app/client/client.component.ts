import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientsData = [];
  @BlockUI() blockUI: NgBlockUI;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getClientsData();
  }

  getClientsData() {
    this.blockUI.start(); // Start blocking
    this.productService.getClientsData().subscribe((response: any) => {
      setTimeout(() => {
        this.blockUI.stop(); // Stop blocking
      }, 1000);
      this.clientsData = response;
      console.log(this.clientsData);
    });
  }

}
