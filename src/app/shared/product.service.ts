import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('assets/data/allProducts.json');
  }

  getFactsheet() {
    return this.http.get('assets/data/factsheet.json');
  }

  getQualityList() {
    return this.http.get('assets/data/ourQuality.json');
  }

  getContactData(){
    return this.http.get('assets/data/contactData.json');
  }

  getRoutes() {
    return this.http.get('assets/data/sdrpNavigationData.json');
  }

}
