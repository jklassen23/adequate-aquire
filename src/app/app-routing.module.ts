import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
{ path: "", redirectTo: "home", pathMatch: "full" },
{path: "home", component: HomeComponent},
{path: "about", component: AboutComponent},
{path: "products", component: ProductsComponent},
{path: "add", component: AddComponent},
{path: "edit/:id", component: EditComponent},
{path: "product-list/:id", component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
