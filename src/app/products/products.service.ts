import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, first } from 'rxjs';

import { Product } from 'src/app/product/product.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = new BehaviorSubject<Product[]|null>(null)
  products$ = this.products.asObservable()

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get<Product[]>(environment.apiHost + '/api/v1/Products')
      .pipe(first())
      .subscribe(results => this.products.next(results))
  }
}
