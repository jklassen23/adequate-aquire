import { Component, OnInit } from '@angular/core';
import { GamingItems } from '../models/gaming-items';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  productList: GamingItems[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe(result => {
      this.productList = result;
    });
  }

}
