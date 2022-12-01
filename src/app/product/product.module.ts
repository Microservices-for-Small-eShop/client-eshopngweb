import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
