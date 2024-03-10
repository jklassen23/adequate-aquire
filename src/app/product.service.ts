import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GamingItems } from './models/gaming-items';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  getProductList(): Observable<GamingItems[]>{
    return this.http.get<GamingItems[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<GamingItems>{
    return this.http.get<GamingItems>(`${this.baseUrl}/${id}`)
  }

  createProduct(product: GamingItems): Observable<GamingItems>{
    return this.http.post<GamingItems>(this.baseUrl, product);
  }

  updateProduct(product: GamingItems): Observable<GamingItems>{
    return this.http.put<GamingItems>(`${this.baseUrl}/${product.id}`, product);
  }

  deleteProductById(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  sortLowToHigh(): Observable<GamingItems[]>{
    return this.http.get<GamingItems[]>(`${this.baseUrl}/?_sort=price&_order=asc`);
  }
  sortHighToLow(): Observable<GamingItems[]>{
    return this.http.get<GamingItems[]>(`${this.baseUrl}/?_sort=price&_order=desc`);
  }
  sortByBrand(brand: string): Observable<GamingItems[]>{
    return this.http.get<GamingItems[]>(`${this.baseUrl}/?q=${brand}`);
  }
}
