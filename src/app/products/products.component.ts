import { Component, OnInit } from '@angular/core';
import { GamingItems } from '../models/gaming-items';
import { ProductService } from '../product.service';

interface Brands {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  brands: Brands[] = [
    {value: 'Razer', viewValue: 'Razer'},
    {value: 'Logitech', viewValue: 'Logitech'},
    {value: 'SteelSeries', viewValue: 'SteelSeries'},
  ];
  
  productList: GamingItems[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe(result => {
      this.productList = result;
    });
  }
  sortLowToHigh() {
    this.productService.sortLowToHigh().subscribe(
      (data) => {
        this.productList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  sortHighToLow() {
    this.productService.sortHighToLow().subscribe(
      (data) => {
        this.productList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  selectedBrand: string = "";

  onBrandSelection(selectedValue: string) {
    this.selectedBrand = selectedValue;
    this.sortByBrand(this.selectedBrand);
  }
  sortByBrand(brand: string) {
  this.productService.sortByBrand(brand).subscribe(
    (data) => {
      this.productList = data;
    },
    (error) => {
      console.error(error);
    }
  );
}
}
