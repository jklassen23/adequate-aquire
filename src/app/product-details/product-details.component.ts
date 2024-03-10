import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  p: any = "";

  constructor (private productService: ProductService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];

    this.productService.getProductById(id).subscribe(result => {
      this.p = result;
    })
  }

  deleteProduct(){
    this.productService.deleteProductById(this.p.id).subscribe(() => {
        this.router.navigateByUrl("/")
    });
  }
}
