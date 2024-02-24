import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@NgModule({
  declarations: [HomeComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
