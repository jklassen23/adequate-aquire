import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  editInfo: any = "";

  constructor(private productService: ProductService, private router: Router, private actRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];

    this.productService.getProductById(id).subscribe(result => {
      this.editInfo = result;
    })
  }

  updateProduct(){
    this.productService.updateProduct(this.editInfo).subscribe(() => {
        this.router.navigateByUrl("/")
    });
  }
}
