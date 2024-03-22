import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input('item') product: any;
  @Output() onAddToCart!: EventEmitter<any>;

  constructor() {
    this.onAddToCart = new EventEmitter();
  }

  handleAddToCart() {
    this.onAddToCart.emit(this.product.id);
  }
}
// Home-> Header-> Cart> Button