import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-rating',
  templateUrl: './product-rating.component.html',
  styleUrl: './product-rating.component.css',
})
export class ProductRatingComponent {
  @Input() rating!: number;
  stars: Array<{ filled: any }> = [];

  // 4.6 4 full, 1 half.
  // 3.2 3 full, 1 half, 1 empty.
  // 4

  ngOnChanges() {
    this.createStars();
  }

  createStars() {
    // 1. Get full stars.
    const fullStars = Math.floor(this.rating); // 4 // 3
    // 2. Get half stars.
    const halfStars = this.rating % 1 !== 0; // true
    // 3. Get empty stars.
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0); // = 1
    this.stars = [
      ...Array(fullStars).fill({ filled: true }),
      ...Array(halfStars ? { filled: 'half' } : {}),
      ...Array(emptyStars).fill({ filled: false }),
    ];
  }
}
