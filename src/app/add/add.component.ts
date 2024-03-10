import { Component } from '@angular/core';
import { GamingItems } from '../models/gaming-items';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newProduct: GamingItems = new GamingItems;

  constructor(private productService: ProductService, private router: Router) {}
  
  ngOnInit(): void {
    
  }

  createProduct(){
    this.productService.createProduct(this.newProduct).subscribe(() => {
        this.router.navigateByUrl("/")
    });
  }
}
